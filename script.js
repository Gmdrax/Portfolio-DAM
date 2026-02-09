// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when skills section becomes visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 50);
        }, index * 80);
    });
}

// Header background on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Add hover effects
const cards = document.querySelectorAll('.expertise-item, .timeline-item-compact, .project-compact, .education-item, .contact-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('placeholder')) {
            this.style.boxShadow = '0 10px 30px rgba(232, 255, 0, 0.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Image placeholder interaction
const imagePlaceholders = document.querySelectorAll('.profile-image, .project-image-compact');
imagePlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        alert('💡 Añade tus imágenes aquí:\n\n1. Reemplaza el div con: <img src="tu-imagen.jpg" alt="descripción">\n2. O usa CSS: background-image: url("tu-imagen.jpg")');
    });
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.expertise-item, .timeline-item-compact, .education-item, .project-compact');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
    fadeObserver.observe(element);
});

// Console message
console.log('%c¡Hola, developer! 👋', 'font-size: 20px; font-weight: bold; color: #e8ff00;');
console.log('%cPortfolio ultra-compacto diseñado para máxima eficiencia', 'font-size: 14px; color: #a0a0a0;');
console.log('%cContacto: gerardmaestrefelip@gmail.com', 'font-size: 14px; color: #e8ff00;');
