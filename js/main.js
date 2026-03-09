document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuButton = document.querySelector('button .fa-bars').parentElement;
    const navbar = document.getElementById('navbar');
    let mobileMenu = document.createElement('div');

    mobileMenu.className = 'fixed inset-0 bg-white z-40 transform transition-transform duration-300 translate-x-full flex flex-col items-center justify-center space-y-8 text-xl';
    mobileMenu.innerHTML = `
        <button class="absolute top-6 right-6 text-3xl text-gray-800"><i class="fas fa-times"></i></button>
        <a href="index.html" class="text-gray-800 hover:text-brand-gold font-medium">Home</a>
        <a href="shop.html" class="text-gray-800 hover:text-brand-gold font-medium">Shop</a>
        <a href="about.html" class="text-gray-800 hover:text-brand-gold font-medium">About Us</a>
        <a href="contact.html" class="text-gray-800 hover:text-brand-gold font-medium">Contact</a>
    `;

    document.body.appendChild(mobileMenu);

    const closeButton = mobileMenu.querySelector('.fa-times').parentElement;

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white/95');
            navbar.classList.remove('bg-white/90');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95');
            navbar.classList.add('bg-white/90');
        }
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});
