// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted with data:', data);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Search functionality
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchQuery = searchBox.value.trim();
        if (searchQuery) {
            // Here you would typically send the search query to a server
            console.log('Searching for:', searchQuery);
            // For now, scroll to the parking results section
            document.querySelector('#find-parking').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Filter handling
const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
    filter.addEventListener('change', () => {
        // Here you would typically filter the parking results based on the selected values
        const selectedFilters = Array.from(filters).map(f => ({
            name: f.name,
            value: f.value
        }));
        console.log('Filters changed:', selectedFilters);
    });
});

// Booking button handling
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('book-btn')) {
        // Here you would typically handle the booking process
        console.log('Booking requested for:', e.target.closest('.parking-card').querySelector('h3').textContent);
        alert('Booking feature coming soon!');
    }
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}); 