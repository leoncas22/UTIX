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