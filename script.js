// Initialize Three.js components
let heroDrone, product1, product2, product3;
let mixer, clock;

// DOM Elements
const body = document.body;
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const demoButton = document.querySelector('.secondary-button');
const demoModal = document.getElementById('demo-modal');
const modalClose = document.querySelector('.modal-close');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const techButtons = document.querySelectorAll('.tech-button');
const heroCanvas = document.getElementById('hero-drone');
const product1Canvas = document.getElementById('product-1');
const product2Canvas = document.getElementById('product-2');
const product3Canvas = document.getElementById('product-3');

// HERO SECTION 3D MODEL BACKGROUND
// (Removed Three.js code for hero section, now using <model-viewer> in HTML)

// Initialize GSAP animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.hero-content p', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.7
    });
    
    gsap.from('.hero-cta', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.9
    });
    
    // Products section animations
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2
    });
    
    // Features section animations
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.15
    });
    
    // About section animations
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
    });
    
    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 0.8
    });
    
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stat-grid',
            start: 'top 90%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
    });
    
    // Contact section animations
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
    });
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 0.8
    });
    
    gsap.from('.info-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 90%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
    });
}

// Custom cursor
function initCursor() {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    });
    
    // Cursor hover effects
    const cursorTargets = document.querySelectorAll('a, button, .product-card, .feature-card, .social-link, .tech-button, .info-item');
    
    cursorTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
            cursorFollower.style.border = '1px solid var(--color-accent-secondary)';
            cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        target.addEventListener('mouseleave', () => {
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.border = '1px solid var(--color-accent-primary)';
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Event Listeners
function initEventListeners() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Navigation links (smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Demo modal
    if (demoButton && demoModal) {
        demoButton.addEventListener('click', (e) => {
            e.preventDefault();
            demoModal.classList.add('active');
        });
        
        modalClose.addEventListener('click', () => {
            demoModal.classList.remove('active');
        });
        
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) {
                demoModal.classList.remove('active');
            }
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Technical specification buttons
    techButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically show a modal with technical specifications
            // For now, we'll just add a simple class change
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
    
    // Form submission prevention (demo only)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form validation and submission logic here
            alert('Form submission would be processed here in a real application.');
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initCursor();
    initEventListeners();
});

// Handle browser visibility changes to optimize performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause intensive animations when the tab is not visible
        // This would be implemented in a production site
    } else {
        // Resume animations when the tab becomes visible again
    }
});