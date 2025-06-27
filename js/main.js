// --- Utility Functions ---

/**
 * Safely gets an HTML element by its ID.
 * @param {string} id The ID of the element.
 * @returns {HTMLElement|null} The element or null if not found.
 */
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with ID "${id}" not found.`);
    }
    return element;
}

/**
 * Handles image loading errors by replacing the src with a placeholder.
 * @param {Event} event The error event.
 * @param {string} altText The alternative text for the placeholder.
 */
function handleImageError(event, altText = "Image") {
    event.target.onerror = null; // Prevent infinite loop if placeholder also fails
    event.target.src = `https://placehold.co/400x300/1f2937/d1d5db?text=${encodeURIComponent(altText.replace(/\s/g, '+'))}`;
}

// --- Mobile Menu Logic ---
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenuOverlay = getElement('mobile-menu-overlay');
    const menuIcon = getElement('menu-icon');
    const closeIcon = getElement('close-icon');

    if (!mobileMenuOverlay || !menuIcon || !closeIcon) return;

    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        mobileMenuOverlay.classList.remove('hidden');
        mobileMenuOverlay.classList.add('mobile-menu-overlay-initial'); // Apply initial state for transition
        // Force reflow for transition to work
        void mobileMenuOverlay.offsetWidth;
        mobileMenuOverlay.classList.add('mobile-menu-overlay-animate');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenuOverlay.classList.remove('mobile-menu-overlay-animate');
        mobileMenuOverlay.classList.add('mobile-menu-overlay-initial'); // Animate out

        // Wait for the transition to finish before hiding
        mobileMenuOverlay.addEventListener('transitionend', function handler() {
            if (!isMobileMenuOpen) { // Ensure it's still closed state before hiding
                mobileMenuOverlay.classList.add('hidden');
            }
            mobileMenuOverlay.removeEventListener('transitionend', handler);
        }, { once: true });

        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// --- Scroll-triggered Animation Logic ---
const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.3 // Trigger when 30% of the element is visible
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const animationType = target.dataset.animationType;

            // Apply the 'entered' class for the animation to play
            target.classList.add('scroll-animate-entered');

            // Handle specific animation types for initial classes
            if (animationType === 'slide-left') {
                target.classList.remove('about-text-initial');
            } else if (animationType === 'slide-right') {
                target.classList.remove('about-image-initial');
            } else if (animationType === 'scale-in') {
                target.classList.remove('contact-form-initial');
            } else if (animationType === 'fade-up' && target.classList.contains('footer-initial')) {
                target.classList.remove('footer-initial');
            }

            // For staggered items (like manufacturers) or elements that animate once
            if (target.dataset.staggerIndex === undefined) {
                    observer.unobserve(target); // Stop observing after animation if not staggered
            }
        }
    });
}, observerOptions);


// --- DOM Content Loaded / Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearElement = getElement('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu event listeners
    getElement('mobile-menu-button')?.addEventListener('click', toggleMobileMenu);
    getElement('mobile-menu-close-button')?.addEventListener('click', toggleMobileMenu);
    getElement('mobile-menu-overlay')?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // --- Hero Section Animations on Load ---
    const backgenImage = getElement('backgen-image'); // New foreground image element
    const heroLogo = getElement('hero-logo');
    const heroTitle = getElement('hero-title');
    const heroDescription = getElement('hero-description');
    const heroButton = getElement('hero-button');
    const companyInfo = getElement('company-info');

    if (backgenImage) {
        // Animate foreground image immediately
        setTimeout(() => {
            backgenImage.classList.add('hero-foreground-image-animate');
        }, 100);
    }

    // Stagger hero elements
    if (heroLogo) {
        setTimeout(() => heroLogo.classList.add('hero-element-animate'), 200);
    }
    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('hero-element-animate'), 400);
    }
    if (heroDescription) {
        setTimeout(() => heroDescription.classList.add('hero-element-animate'), 600);
    }
    if (companyInfo) {
        setTimeout(() => companyInfo.classList.add('hero-element-animate'), 800);
    }
    if (heroButton) {
        setTimeout(() => heroButton.classList.add('hero-element-animate'), 1000);
    }


    // --- Populate Manufacturers Grid ---
    const manufacturersGrid = getElement('manufacturers-grid');
    if (manufacturersGrid) {
        manufacturers.forEach((mfr, index) => {
            const div = document.createElement('div');
            // Add initial animation class and data-attribute for stagger
            div.className = `glass-effect p-4 flex items-center justify-center h-24 rounded-lg hover:scale-105 transition duration-300 scroll-animate-initial`;
            div.style.transitionDelay = `${index * 0.1}s`; // Stagger delay
            // Updated img class for better sizing: h-16 w-full object-contain
            div.innerHTML = `<img src="${mfr.logo}" alt="${mfr.name}" class="${mfr.logoSize} w-full object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" onerror="handleImageError(event, '${mfr.name} Logo')">`;
            manufacturersGrid.appendChild(div);
            fadeInObserver.observe(div); // Observe each manufacturer logo
        });
    }

    // --- Populate Product Cards ---
    const productCardsContainer = getElement('product-cards-container');
    if (productCardsContainer) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'glass-effect rounded-xl p-6 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-700/30 scroll-animate-initial';

            // Image with error fallback
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.category;
            img.className = 'product-image mb-6';
            img.onerror = function() { handleImageError(event, product.category); };
            productCard.appendChild(img);

            // Title and Manufacturer Badge
            const headerDiv = document.createElement('div');
            headerDiv.className = 'flex justify-between items-start mb-4';
            headerDiv.innerHTML = `
                <h3 class="text-3xl font-semibold text-white leading-tight">${product.category}</h3>
                <span class="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide opacity-80">
                    ${product.manufacturer}
                </span>
            `;
            productCard.appendChild(headerDiv);

            // Description
            const descriptionP = document.createElement('p');
            descriptionP.className = 'text-gray-300 text-lg mb-6 flex-grow';
            descriptionP.textContent = product.description;
            productCard.appendChild(descriptionP);

            // Key Technical Specs
            const specsDiv = document.createElement('div');
            specsDiv.className = 'mb-6';
            specsDiv.innerHTML = `<h4 class="text-xl font-medium text-purple-400 mb-3">Key Specs:</h4>`;
            const specsUl = document.createElement('ul');
            specsUl.className = 'space-y-2';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.className = 'flex items-center text-gray-300';
                li.innerHTML = `
                    <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="font-semibold">${spec.name}:</span> ${spec.value}
                `;
                specsUl.appendChild(li);
            });
            specsDiv.appendChild(specsUl);
            productCard.appendChild(specsDiv);

            // Call to Action Buttons
            const ctaDiv = document.createElement('div');
            ctaDiv.className = 'mt-auto flex flex-col sm:flex-row gap-4';
            ctaDiv.innerHTML += `
                <button class="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full glow-button flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    View Specs
                </button>
            `;
            ctaDiv.innerHTML += `
                <button class="flex-1 px-6 py-3 bg-gray-700 text-gray-200 font-semibold rounded-full hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.797 0-7.585-.453-11-1.745M12 21V3M10 4L4 9M18 4l6 5M15 15h4M15 19h4"></path></svg>
                    Request Quote
                </button>
            `;
            productCard.appendChild(ctaDiv);

            productCardsContainer.appendChild(productCard);
            fadeInObserver.observe(productCard); // Observe each product card
        });
    }

    // --- Populate Product Tables ---
    const productTablesContainer = getElement('product-tables-container');
    if (productTablesContainer) {
        productTablesData.forEach(tableData => {
            const tableContainerDiv = document.createElement('div');
            tableContainerDiv.className = 'product-table-container scroll-animate-initial'; // Apply initial animation class
            
            const h3 = document.createElement('h3');
            h3.className = 'text-3xl font-semibold text-white mb-6 text-center';
            h3.textContent = tableData.title;
            tableContainerDiv.appendChild(h3);

            const overflowDiv = document.createElement('div');
            overflowDiv.className = 'overflow-x-auto rounded-xl';
            tableContainerDiv.appendChild(overflowDiv);

            const table = document.createElement('table');
            table.className = 'product-table';
            overflowDiv.appendChild(table);

            const thead = document.createElement('thead');
            table.appendChild(thead);
            const headerRow = document.createElement('tr');
            thead.appendChild(headerRow);
            tableData.headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            const tbody = document.createElement('tbody');
            table.appendChild(tbody);
            tableData.rows.forEach(rowData => {
                const tr = document.createElement('tr');
                rowData.forEach(cellData => {
                    const td = document.createElement('td');
                    td.textContent = cellData;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            productTablesContainer.appendChild(tableContainerDiv);
            fadeInObserver.observe(tableContainerDiv); // Observe each table
        });
    }

    // --- Observe other sections for animation ---
    const sectionsToAnimate = document.querySelectorAll(
        'section[data-animation-type="fade-up"], ' +
        'div[data-animation-type="slide-left"], ' +
        'div[data-animation-type="slide-right"], ' +
        'div[data-animation-type="scale-in"], ' +
        'footer[data-animation-type="fade-up"]'
    );

    sectionsToAnimate.forEach(section => {
        fadeInObserver.observe(section);
    });


    // --- Form Submission Alert (Example) ---
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            // In a real application, you would send this data to a backend server.
            // For this example, we'll use a simple alert.
            alert('Message sent! (Form submission is handled by client-side JS for demo purposes.)');
            contactForm.reset(); // Clear the form
        });
    }
});