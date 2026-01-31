const Btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

Btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    Btn.classList.toggle('change');

}