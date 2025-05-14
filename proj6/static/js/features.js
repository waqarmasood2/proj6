document.addEventListener('DOMContentLoaded', function() {
    // Feature Category Tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.category-content');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            categoryContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${category}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Animate feature items when they come into view
    const animateFeatures = () => {
        const featureItems = document.querySelectorAll('.feature-item');
        
        featureItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100); // Stagger the animations
            }
        });
    };
    
    // Set initial state for feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate showcase items when they come into view
    const animateShowcase = () => {
        const showcaseItems = document.querySelectorAll('.showcase-item');
        
        showcaseItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for showcase items
    document.querySelectorAll('.showcase-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    
    // Run animations on scroll
    window.addEventListener('scroll', () => {
        animateFeatures();
        animateShowcase();
    });
    
    // Run once on page load
    animateFeatures();
    animateShowcase();
    
    // Comparison table row hover effect
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'rgba(0, 113, 227, 0.05)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
    });
});