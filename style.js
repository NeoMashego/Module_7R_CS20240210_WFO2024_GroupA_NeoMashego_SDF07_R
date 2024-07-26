const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');    //nav will look for respective tags onn page to take the user to

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');     //Open nav everytime I click
}); 

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});