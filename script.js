// this is for humberger menu
document.addEventListener('DOMContentLoaded', function() {
    // This is the JavaScript for the hamburger menu functionality.
    // It listens for a click on the button and toggles a class
    // to show or hide the mobile navigation links.

    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-links-container');
    const navLinks = document.querySelectorAll('.nav-links a');

    // This listener toggles the 'is-open' class on the nav container.
    // The CSS rules associated with '.is-open' will handle the animation.
    hamburger.addEventListener('click', () => {
        navContainer.classList.toggle('is-open');
    });

    // This listener closes the menu when a link inside it is clicked.
    // This is a good practice for single-page websites to ensure a smooth user experience.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('is-open');
        });
    });
});
// this was humberger menu 