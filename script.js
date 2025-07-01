// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight domain in the page
document.addEventListener('DOMContentLoaded', function() {
    const domainElements = document.querySelectorAll('.domain-highlight');
    domainElements.forEach(el => {
        el.innerHTML = 'utix<span class="text-accent">.com</span>';
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Highlight domain in the page
    const domainElements = document.querySelectorAll('.domain-highlight');
    if (domainElements.length > 0) {
        domainElements.forEach(el => {
            el.innerHTML = 'utix<span class="text-accent">.com</span>';
        });
    }

    // --- KODE BARU UNTUK MENU MOBILE ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    // --- AKHIR KODE BARU ---
});