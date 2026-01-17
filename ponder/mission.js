
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let border = document.getElementById('content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        logo.setAttribute('src', 'images/byu-black.png');
        border.style.border = '1px solid white';

    } else if (current == 'light') {

        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.setAttribute('src', 'images/byu-white.png');
        border.style.border = '1px solid black';
    }

    else {
        // default
        document.body.style.backgroundColor = 'none';
        border.style.border = '1px solid gray';
    }
}           
                    