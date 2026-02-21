// Navigation state management
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav('home-selector');
});

document.addEventListener('htmx:afterSwap', function(evt) {
    // Update active nav based on which content was loaded
    const targetId = evt.detail.requestConfig.triggeringEvent?.target?.id;
    if (targetId) {
        updateActiveNav(targetId);
    }
});

function updateActiveNav(activeId) {
    const navItems = ['home-selector', 'about-selector', 'projects-selector'];
    
    navItems.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === activeId) {
                el.classList.remove('text-gray-300');
                el.classList.add('nav-active');
            } else {
                el.classList.remove('nav-active');
                el.classList.add('text-gray-300');
            }
        }
    });
}

// Handle nav clicks
document.addEventListener('click', function(e) {
    const target = e.target.closest('.nav-item');
    if (target) {
        updateActiveNav(target.id);
    }
});
