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
