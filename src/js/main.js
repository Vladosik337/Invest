import '../scss/style.scss'


// dark theme
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if(isDarkMode){
//     document.querySelector("body").style.backgroundColor = '#2C3136';
//     document.querySelector("body").style.color = '#fff';
//
// }


// -----------------Burger-----------------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove("no-scroll");
}));
