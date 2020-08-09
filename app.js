const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menue = document.querySelector('.header .nav-bar .nav-list ul');
const menue_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menue.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_pos = window.scrollY;
    //console.log(scroll_pos)
    if (scroll_pos > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menue_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menue.classList.toggle('active');
    });
});