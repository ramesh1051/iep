// Define categories for the filter dropdown, mapping display names to section IDs
const sectionCategories = [
    { value: 'mr-welding', text: 'I. M&R Welding' },
    { value: 'steel-repair', text: '— Steel Repair Alloys' },
    { value: 'ci-repair', text: '— Cast Iron Repair Alloys' },
    { value: 'hardfacing', text: '— Hardfacing Alloys' },
    { value: 'metal-protection', text: 'II. Metal Protection' },
    { value: 'anti-corrosion', text: '— Anti-Corrosion' },
    { value: 'anti-abrasion', text: '— Anti-Abrasion / Erosion' },
    { value: 'pipeline-putties-and-maint', text: '— Pipeline Re-Strengthening & Putties' },
    { value: 'mechanical-mro', text: 'III. Mechanical MRO' },
    { value: 'speciality-lubrication', text: 'IV. Speciality Lubrication ACR' },
    { value: 'energy-conservation', text: 'V. Energy Conservation' },
    { value: 'concrete-flooring', text: 'VI. Concrete & Flooring' },
    { value: 'electrical-maintenance', text: 'VII. Electrical Maintenance' },
    { value: 'fire-safety', text: 'VIII. Fire & Safety' }
];

const categoryFilter = document.getElementById('category-filter');

function populateCategories() {
    categoryFilter.innerHTML = '<option value="all">Select a Category</option>';
    sectionCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.value;
        option.textContent = category.text;
        categoryFilter.appendChild(option);
    });
}

function filterSections() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        const targetSection = document.getElementById(selectedCategory);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                categoryFilter.value = 'all';
            }, 700); 
        }
    }
}

// Mobile menu and Animation Observer functions (for standalone page)
function toggleMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    if (!mobileMenuOverlay || !menuIcon || !closeIcon) {
        return;
    }
    mobileMenuOverlay.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate-entered');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year-footer'); 
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    document.getElementById('mobile-menu-button')?.addEventListener('click', toggleMobileMenu);
    document.getElementById('mobile-menu-close-button')?.addEventListener('click', toggleMobileMenu);
    document.getElementById('mobile-menu-overlay')?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    populateCategories();
    categoryFilter.addEventListener('change', filterSections);

    document.querySelectorAll('section.scroll-animate-initial, footer.scroll-animate-initial').forEach(element => {
        fadeInObserver.observe(element);
    });
});
