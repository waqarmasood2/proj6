document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items when they come into view
    const animateTimeline = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200); // Stagger the animations
            }
        });
    };
    
    // Set initial state for timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate team members when they come into view
    const animateTeam = () => {
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach((member, index) => {
            const memberPosition = member.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (memberPosition < screenPosition) {
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, index * 150); // Stagger the animations
            }
        });
    };
    
    // Set initial state for team members
    document.querySelectorAll('.team-member').forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate value cards when they come into view
    const animateValues = () => {
        const valueCards = document.querySelectorAll('.value-card');
        
        valueCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150); // Stagger the animations
            }
        });
    };
    
    // Set initial state for value cards
    document.querySelectorAll('.value-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animations on scroll
    window.addEventListener('scroll', () => {
        animateTimeline();
        animateTeam();
        animateValues();
    });
    
    // Run once on page load
    animateTimeline();
    animateTeam();
    animateValues();
});