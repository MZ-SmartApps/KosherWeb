// script.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image'); // Select all images

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        images.forEach(image => {
            const rect = image.getBoundingClientRect(); // Get position of image
            if (rect.top < windowHeight && rect.bottom >= 0) {
                image.classList.add('visible'); // Add visible class if in view
            }
        });
    }

    // Check visibility on scroll and load
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check when the page loads
});
