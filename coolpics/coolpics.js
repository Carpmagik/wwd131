
const button = document.querySelector('.text-button');
const nav = document.querySelector('nav');


button.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('hide');
}

const gallery = document.querySelector('.grid');
const modal = document.querySelector('dialog');
const image = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    image.src = full;
    image.alt = alt;
    modal.showModal();
    

}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});