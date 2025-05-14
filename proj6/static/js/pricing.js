document.addEventListener('DOMContentLoaded', function() {
    // Pricing Toggle
    const billingToggle = document.getElementById('billing-toggle');
    const body = document.body;
    
    billingToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('annual-billing');
        } else {
            body.classList.remove('annual-billing');
        }
    });
    
    // Animate pricing cards when they come into view
    const animatePricingCards = () => {
        const pricingCards = document.querySelectorAll('.plan-card');
        
        pricingCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = card.classList.contains('popular') ? 'translateY(0) scale(1.05)' : 'translateY(0)';
                }, index * 200); // Stagger the animations
            }
        });
    };
    
    // Set initial state for pricing cards
    document.querySelectorAll('.plan-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = card.classList.contains('popular') ? 'translateY(20px) scale(1.05)' : 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate FAQ items when they come into view
    const animateFAQItems = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach((item, index) => {
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
    
    // Set initial state for FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Toggle active class
            question.classList.toggle('active');
            
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentSlide = index;
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Run animations on scroll
    window.addEventListener('scroll', () => {
        animatePricingCards();
        animateFAQItems();
    });
    
    // Run once on page load
    animatePricingCards();
    animateFAQItems();
});