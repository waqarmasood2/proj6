document.addEventListener('DOMContentLoaded', function() {

     document.body.style.cursor = 'none';



    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme + '-theme');
        updateIcons(savedTheme);
    } else {
        // Use device preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';
        body.classList.add(defaultTheme + '-theme');
        updateIcons(defaultTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
            updateIcons('dark');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
            updateIcons('light');
        }
    });
    
    function updateIcons(theme) {
        if (theme === 'dark') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }

const mobMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobMenu =document.querySelector(".mobile-menu");




const square = document.querySelector(".square");
const triangle = document.querySelector('.rounded-triangle');

// Initialize sizes if elements exist
if (square) {
    square.style.height = "100px";
    square.style.width = "100px";
}

if (triangle) {
    triangle.style.height = "100px";
    triangle.style.width = "100px";
}

// Square movement variables
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
let angle = 0;
let speedX = Math.random() * 4 - 2; 
let speedY = Math.random() * 4 - 2;
let rotationSpeed = 1;

// Triangle movement variables
let triPosX = window.innerWidth / 2;
let triPosY = window.innerHeight / 2;
let tri_angle = 0;
let triSpeedX = Math.random() * 4 - 2;
let triSpeedY = Math.random() * 4 - 2;
let triRotationSpeed = Math.random() * 3;

function animatesquare() {
    if (!square) return; // Stop if element doesn't exist
    
    // Update square position
    posX += speedX;
    posY += speedY;
    angle += rotationSpeed;

    // Apply movement
    square.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle}deg)`;

    // Collision detection
    if (posX + 100 >= window.innerWidth || posX <= 0) speedX *= -1;
    if (posY + 100 >= window.innerHeight || posY <= 0) speedY *= -1;

    requestAnimationFrame(animatesquare); // Call itself
}

function triangleanimate() {
    if (!triangle) return; // Stop if element doesn't exist
    
    // Update triangle position
    triPosX += triSpeedX;
    triPosY += triSpeedY;
    tri_angle += triRotationSpeed;

    // Apply movement
    triangle.style.transform = `translate(${triPosX}px, ${triPosY}px) rotate(${tri_angle}deg)`;

    // Collision detection
    if (triPosX + 100 >= window.innerWidth || triPosX <= 0) triSpeedX *= -1;
    if (triPosY + 100 >= window.innerHeight || triPosY <= 0) triSpeedY *= -1;

    requestAnimationFrame(triangleanimate); // Call itself
}

// Start both animations independently
if (square) animatesquare();
if (triangle) triangleanimate();







    const trail = document.querySelector('.cursor-trail');
  const positions = [];
  const maxPositions = 20; // Number of trail segments
  
  document.addEventListener('mousemove', (e) => {
    // Store current position
    positions.push({
      x: e.clientX,
      y: e.clientY,
      time: Date.now()
    });
    
    // Remove old positions
    while (positions.length > maxPositions) {
      positions.shift();
    }
    
    // Animate trail
    animateTrail();
  });
  
  function animateTrail() {
  if (positions.length === 0) return;
  
  const current = positions[positions.length - 1];
  trail.style.left = `${current.x}px`;
  trail.style.top = `${current.y}px`;
  trail.style.opacity = '1';
  
  // Create meteor tail
  if (positions.length > 3) {
    const prevPos = positions[Math.floor(positions.length * 0.7)]; // Get a previous position
    
    const tail = document.createElement('div');
    tail.className = 'meteor-tail';
    
    // Calculate angle and distance
    const dx = current.x - prevPos.x;
    const dy = current.y - prevPos.y;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const length = Math.sqrt(dx*dx + dy*dy) * 1.2;
    
    // Position between current and previous point
    tail.style.left = `${prevPos.x}px`;
    tail.style.top = `${prevPos.y}px`;
    tail.style.width = `${length}px`;
    tail.style.transform = `rotate(${angle}deg)`;
    
    document.body.appendChild(tail);
    
    // Fade out and remove
    setTimeout(() => {
      tail.style.opacity = '0';
      setTimeout(() => tail.remove(), 500);
    }, 100);
  }
}
  
  // Hide trail when mouse leaves window
  document.addEventListener('mouseout', () => {
    trail.style.opacity = '0';
  });




//mynew update 
// JavaScript
// const hed = document.querySelector(".center-heading");
// let lastScrollY = window.scrollY;

// document.addEventListener('scroll', () => {
//     const current = parseFloat(getComputedStyle(hed).getPropertyValue('--spacing')) || 0;
//     const newSpacing = window.scrollY > lastScrollY 
//         ? Math.min(current + 0.08, 5) 
//         : Math.max(current - 0.08, 0);
    
//     hed.style.setProperty('--spacing', `${newSpacing}px`);
//     lastScrollY = window.scrollY;
// }, { passive: true });
const hed = document.querySelector(".center-heading");
let lastScrollY = window.scrollY;
let currentSpacing = parseInt(window.getComputedStyle(hed).letterSpacing) || 0;
let originalText = hed.textContent; // Store original text
let modifiedText = originalText; // Track current text state

// Configurable values
const maxSpacing = 10; // Maximum letter spacing
const minSpacing = 0;  // Minimum letter spacing
const maxCharactersToRemove = Math.floor(originalText.length / 2); // Don't remove more than half
const minTextLength = 12; // Minimum characters to maintain (matches your -12 value)

document.addEventListener('scroll', () => {
    const isScrollingDown = window.scrollY > lastScrollY;
    const scrollDistance = Math.abs(window.scrollY - lastScrollY);
    
    // Calculate scroll intensity (0-1) based on position in document
    const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Calculate character change based on scroll intensity
    const characterChange = Math.max(1, Math.floor(scrollRatio * 5)); // More aggressive removal when further down
    
    if (isScrollingDown) {
        // SCROLLING DOWN - increase spacing and remove characters
        currentSpacing = Math.min(currentSpacing + (0.5 * scrollRatio), maxSpacing);
        
        // Calculate how many characters we could remove (keeping your exact line)
        const currentLength = modifiedText.length;
        const charsToRemove = Math.min(characterChange, 
                                     Math.floor((currentLength - 12) / 2), // Your preserved line
                                     maxCharactersToRemove - (originalText.length - currentLength) / 2);
        
        if (charsToRemove > 0 && modifiedText.length > minTextLength) {
            modifiedText = modifiedText.substring(charsToRemove, modifiedText.length - charsToRemove);
        }
    } else {
        // SCROLLING UP - decrease spacing and restore characters
        currentSpacing = Math.max(currentSpacing - (0.5 * (1 - scrollRatio)), minSpacing);
        
        // Calculate how many characters we could restore
        const missingChars = originalText.length - modifiedText.length;
        const charsToAdd = Math.min(characterChange, 
                                  Math.floor(missingChars / 2));
        
        if (charsToAdd > 0 && modifiedText.length < originalText.length) {
            const charsToRestore = charsToAdd * 2;
            const startPos = Math.max(0, (originalText.length - modifiedText.length - charsToRestore) / 2);
            const endPos = originalText.length - startPos;
            modifiedText = originalText.substring(startPos, endPos);
        }
    }
    
    // Apply changes with smooth transitions
    hed.style.transition = 'letter-spacing 0.3s ease, font-size 0.3s ease';
    hed.style.letterSpacing = `${currentSpacing}px`;
    hed.textContent = modifiedText;
    
    // Optional: Scale font size based on spacing for better visual effect
    // hed.style.fontSize = `${1 + (currentSpacing / 50)}rem`;
    
    lastScrollY = window.scrollY;
    
}, { passive: true });

// Reset to original when scrolling to top
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        modifiedText = originalText;
        currentSpacing = minSpacing;
        hed.style.letterSpacing = `${currentSpacing}px`;
        hed.textContent = modifiedText;
    }
});
    // Optional: Scale font









    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle hamburger to X
        const spans = this.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.maxHeight;
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
            } else {
                answer.style.maxHeight = null;
                question.classList.remove('active');
            }
        });
    });
    
    // Testimonial Slider
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate corresponding dot
        testimonialSlides[index].style.display = 'block';
        testimonialDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }

    // Initialize slider
    showSlide(0);
    
    // Auto-rotate slides every 5 seconds
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    startSlider();
    
    // Pause on hover
    const sliderContainer = document.querySelector('.testimonials-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', startSlider);
    
    // Dot navigation
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlider();
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            // Simple email validation
            if (emailInput && !emailInput.value.includes('@')) {
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
            }
            
            // Message validation
            if (messageInput && messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                isValid = false;
            } else {
                messageInput.classList.remove('error');
            }
            
            if (!isValid) {
                e.preventDefault();
                this.querySelector('.error-message').style.display = 'block';
            }
        });
    }
});