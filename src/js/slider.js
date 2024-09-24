let items = document.querySelectorAll(".advantages__item");
let nav = document.querySelectorAll(".advantages__nav-button");

if (screen.availWidth <= 992) {
    let activeIndex = 0;

    items.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });

    nav.forEach((button, index) => {
        if (button.classList.contains('active')) {
            activeIndex = index;
        }
    });

    items[activeIndex].classList.add('active');
    nav[activeIndex].classList.add('active');

    const switchItem = () => {
        items[activeIndex].classList.remove('active');
        nav[activeIndex].classList.remove('active');

        activeIndex = (activeIndex + 1) % items.length;

        items[activeIndex].classList.add('active');
        nav[activeIndex].classList.add('active');
    };

    setInterval(switchItem, 3000);

    nav.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            items[activeIndex].classList.remove('active');
            nav[activeIndex].classList.remove('active');

            activeIndex = index;

            items[activeIndex].classList.add('active');
            nav[activeIndex].classList.add('active');
        });
    });
}
