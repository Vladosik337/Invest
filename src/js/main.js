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

// -----------------Validate Form-----------------

let name = document.getElementById('user-name');
let sureName = document.getElementById('user-surname');
let phoneNumber = document.getElementById('user-number');
let email = document.getElementById('user-email');
let submit = document.querySelector('.form-hero__button');

let post = localStorage.getItem('form__info');


function validateText(str){
    if(/^[A-Za-z\s]+$/.test(str)){
        console.log('good');
        return true;
    }
    else {
        alert(`Літери мають бути Латинською і без цифр`)
        console.log('bad');
        return false;
    }
}

function validateNumber(str){
    if (/^\d{12}$/.test(str)){
        console.log('valid');
        return true;
    }
    else {
        console.log('invalid');
        alert(`Кількість цифр має бути 12\nВаша кількість ${str.length}`);
        return false;
    }
}


// console.log(JSON.parse(data));
let  data = localStorage.getItem("form__info");
if (data){
    let parseData = JSON.parse(data);

    if (parseData.name){
        name.value = parseData.name;
    }
    if (parseData.sureName){
        sureName.value = parseData.sureName;
    }
    if (parseData.phoneNumber){
        phoneNumber.value = parseData.phoneNumber;
    }
    if (parseData.email){
        email.value = parseData.email;
    }
}

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    if (validateText(name.value) && validateText(sureName.value) && validateNumber(phoneNumber.value)){
        const obj = {
            name: name.value,
            sureName: sureName.value,
            phoneNumber: phoneNumber.value,
            email: email.value,
        }
        console.log(obj)


        localStorage.setItem('form__info', JSON.stringify(obj));

        alert('Данні успішко відправлено!');
    }
    else{
        console.log('помилка')
    }
})
