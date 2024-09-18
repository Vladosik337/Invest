// -----------------Counter Anim-----------------

function counterAnim(element){
    const countElements = document.querySelectorAll(`.${element}`);
    countElements.forEach((countElement)=>{
        const endValue = countElement.textContent;
        const duration = 1000;
        const interval = 30;
        const step = endValue / (duration / interval);

        let currentValue = 0;
        const timer = setInterval(() => {
            currentValue += step;
            if (currentValue >= endValue) {
                currentValue = endValue;
                clearInterval(timer);
            }
            countElement.textContent = Math.round(currentValue);
        }, interval);
    });
}

window.addEventListener('load', () => {
    counterAnim('stats-hero__item-title');
});

