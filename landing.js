// landing.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    const email = form.querySelector('input[type="email"]').value;
    if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /[a-z0-9]+@[a-z]+\\.[a-z]{2,3}/;
    return re.test(String(email).toLowerCase());
}

// Animations and Scroll Effects
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});