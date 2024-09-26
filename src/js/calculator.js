const inputs = document.querySelectorAll('.profit__input');

const investmentLabel = document.querySelector('.investment__input-value');
const investmentInp = document.querySelector('#investment-input');

const profitLabel = document.querySelector('.profit__input-value');
const profitInp = document.querySelector('#profit-input');


inputs.forEach((input) => {
        // Set initial value on load
        const initialValue = ((input.value - input.min) / (input.max - input.min)) * 100;
        input.style.setProperty('--percent', `${initialValue}%`);

        // Update value on input change
        input.addEventListener('input', function () {
            const value = ((this.value - this.min) / (this.max - this.min)) * 100;
            this.style.setProperty('--percent', `${value}%`);
        });
});

investmentInp.addEventListener('input', ()=>{
    investmentLabel.innerHTML = investmentInp.value;
});

profitInp.addEventListener('input', ()=>{
    profitLabel.innerHTML = profitInp.value;
});
