// --- Utility Functions ---

/**
 * Safely gets an HTML element by its ID.
 * @param {string} id The ID of the element.
 * @returns {HTMLElement|null} The element or null if not found.
*/
function getElement(id) {
    const element = document.getElementById(id);
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
    console.warn(`Image failed to load: ${event.target.src}. Replaced with placeholder.`);
}

// --- Mobile Menu Logic ---
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenuOverlay = getElement('mobile-menu-overlay');
    const menuIcon = getElement('menu-icon');
    const closeIcon = getElement('close-icon');

    if (!mobileMenuOverlay || !menuIcon || !closeIcon) {
        console.error('Mobile menu elements not found.');
        return;
    }

    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        mobileMenuOverlay.classList.remove('hidden');
        mobileMenuOverlay.classList.add('mobile-menu-overlay-initial');
        void mobileMenuOverlay.offsetWidth; // Force reflow
        mobileMenuOverlay.classList.add('mobile-menu-overlay-animate');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling when menu is open
        console.log('Mobile menu opened.');
    } else {
        mobileMenuOverlay.classList.remove('mobile-menu-overlay-animate');
        mobileMenuOverlay.classList.add('mobile-menu-overlay-initial');

        mobileMenuOverlay.addEventListener('transitionend', function handler() {
            if (!isMobileMenuOpen) {
                mobileMenuOverlay.classList.add('hidden');
            }
            mobileMenuOverlay.removeEventListener('transitionend', handler);
        }, { once: true });

        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('overflow-hidden'); // Restore scrolling
        console.log('Mobile menu closed.');
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

            target.classList.add('scroll-animate-entered');

            if (animationType === 'slide-left') {
                target.classList.remove('about-text-initial');
            } else if (animationType === 'slide-right') {
                target.classList.remove('about-image-initial');
            } else if (animationType === 'scale-in') {
                target.classList.remove('contact-form-initial');
            } else if (animationType === 'fade-up' && target.classList.contains('footer-initial')) {
                target.classList.remove('footer-initial');
            }

            if (target.dataset.staggerIndex === undefined) {
                observer.unobserve(target);
            }
        }
    });
}, observerOptions);


// --- DOM Content Loaded / Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Initializing scripts.');

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
    const backgenImage = getElement('backgen-image');
    const heroTitle = getElement('hero-title');
    const heroDescription = getElement('hero-description');
    const heroButton = getElement('hero-button');
    const companyInfo = getElement('company-info');

    if (backgenImage) {
        setTimeout(() => {
            backgenImage.classList.add('hero-foreground-image-animate');
        }, 100);
    }

    // Stagger hero elements
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
            div.className = `glass-effect p-4 flex items-center justify-center h-24 rounded-lg hover:scale-105 transition duration-300 scroll-animate-initial`;
            div.style.transitionDelay = `${index * 0.1}s`;
            div.innerHTML = `<img src="${mfr.logo}" alt="${mfr.name}" class="${mfr.logoSize} w-full object-contain opacity-75 hover:opacity-100 transition-opacity duration-300" onerror="handleImageError(event, '${mfr.name} Logo')">`;
            manufacturersGrid.appendChild(div);
            fadeInObserver.observe(div);
        });
    }

    // --- Populate Product Cards (New Design) ---
    const productCardsContainer = getElement('product-cards-container');
    if (productCardsContainer) {
        productCardsContainer.innerHTML = ''; // Clear any existing static cards
        products.forEach((product, index) => {
            const productCard = document.createElement('a'); // Changed to <a> for direct linking
            productCard.href = product.detailsPage || 'starblaze.html'; // Link to detailsPage or fallback
            productCard.className = 'product-card flex flex-col rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out glow-button group scroll-animate-initial';
            productCard.style.transitionDelay = `${index * 0.08}s`; // Stagger animation

            // Add an alert for products without a specific details page, on click
            if (!product.detailsPage) {
                productCard.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default navigation for the alert
                    alert(`Detailed specifications for "${product.category}" are coming soon! Redirecting to a general solutions page.`);
                    window.location.href = 'starblaze.html'; // Manually navigate after alert
                });
            }

            productCard.innerHTML = `
                <div class="product-card-image-wrapper">
                    <img src="${product.image}" alt="${product.category}" class="product-card-image" onerror="handleImageError(event, '${product.category}')">
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between bg-gray-800 bg-opacity-80 backdrop-blur-md">
                    <div>
                        <h3 class="text-2xl font-semibold text-white mb-2 leading-tight">${product.category}</h3>
                        <p class="text-sm text-purple-400 font-medium mb-3">${product.manufacturer}</p>
                        <p class="text-gray-300 text-base mb-4 line-clamp-3">${product.description}</p>
                    </div>
                    <div class="mt-auto">
                        <span class="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Learn More
                            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                    </div>
                </div>
            `;
            productCardsContainer.appendChild(productCard);
            fadeInObserver.observe(productCard);
        });
    }

    const sectionsToAnimate = document.querySelectorAll(
        '[data-animation-type="fade-up"], ' +
        '[data-animation-type="slide-left"], ' +
        '[data-animation-type="slide-right"], ' +
        '[data-animation-type="scale-in"]'
    );
    

    sectionsToAnimate.forEach(section => {
        fadeInObserver.observe(section);
    });


    // --- Form Submission Alert (Example) ---
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Contact form submitted (client-side demo).');
            alert('Message sent! (Form submission is handled by client-side JS for demo purposes.)');
            contactForm.reset();
        });
    }
});