let items = document.querySelectorAll(".advantages__item");
let nav = document.querySelectorAll(".advantages__nav-button");

if (screen.availWidth <= 992) {
    let activeIndex = 0;


    items.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });

    nav.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });


    if (activeIndex === 0) {
        activeIndex = 0;
        items[activeIndex].classList.add('active');
        nav[activeIndex].classList.add('active');
    }


    setInterval(() => {
        items[activeIndex].classList.remove('active');
        nav[activeIndex].classList.remove('active');

        activeIndex = (activeIndex + 1) % items.length;

        items[activeIndex].classList.add('active');
        nav[activeIndex].classList.add('active');
    }, 3000);
}
