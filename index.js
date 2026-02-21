// Navigation state management
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav('home-selector');
    setupMobileMenu();
});

document.addEventListener('htmx:afterSwap', function(evt) {
    // Update active nav based on which content was loaded
    const targetId = evt.detail.requestConfig.triggeringEvent?.target?.id;
    if (targetId) {
        updateActiveNav(targetId);
    }
});

function updateActiveNav(activeId) {
    // Map mobile IDs to desktop IDs and vice versa
    const idMap = {
        'home-selector': ['home-selector', 'mobile-home-selector'],
        'about-selector': ['about-selector', 'mobile-about-selector'],
        'projects-selector': ['projects-selector', 'mobile-projects-selector'],
        'mobile-home-selector': ['home-selector', 'mobile-home-selector'],
        'mobile-about-selector': ['about-selector', 'mobile-about-selector'],
        'mobile-projects-selector': ['projects-selector', 'mobile-projects-selector'],
    };
    
    const allIds = ['home-selector', 'about-selector', 'projects-selector', 'mobile-home-selector', 'mobile-about-selector', 'mobile-projects-selector'];
    const activeIds = idMap[activeId] || [];
    
    allIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (activeIds.includes(id)) {
                el.classList.remove('text-gray-300');
                el.classList.add('nav-active', 'text-primary');
            } else {
                el.classList.remove('nav-active', 'text-primary');
                el.classList.add('text-gray-300');
            }
        }
    });
}

// Handle nav clicks
document.addEventListener('click', function(e) {
    const target = e.target.closest('.nav-item, .mobile-nav-item');
    if (target) {
        updateActiveNav(target.id);
    }
});

// Mobile menu functionality
function setupMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between hamburger and X
            const svg = menuButton.querySelector('svg');
            if (isExpanded) {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            } else {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            }
        });
    }
}

function closeMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        
        // Reset to hamburger icon
        const svg = menuButton.querySelector('svg');
        if (svg) {
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
    }
}
