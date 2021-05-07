const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); // do for all links

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); // for entire document body
})

// for each nav-link, if there is a click on one, remove the nav-open class
navLinks.forEach(link => { 
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})