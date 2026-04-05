let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProduct = [];
let allProducts = [];
let carts = [];

// open cart
if (iconCart) {
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });
}

// close cart
if (closeCart) {
    closeCart.addEventListener('click', () => {
        body.classList.remove('showCart');
    });
}

// add products to page
const addDataToHTML = () => {
    if (!listProductHTML) return;

    listProductHTML.innerHTML = '';

    listProduct.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.dataset.id = product.id;

        newProduct.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart">Add to Cart</button>
        `;

        listProductHTML.appendChild(newProduct);
    });
};

const checkoutBtn = document.querySelector('.checkout');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {

        // 1. clear cart array
        carts = [];

        // 2. clear localStorage
        localStorage.removeItem('cart');

        // 3. update UI
        addCartToHTML();

        // 4. show alert
        alert('Thank you for your purchase! 🛒');
    });
}

// click add to cart
if (listProductHTML) {
    listProductHTML.addEventListener('click', (event) => {
        if (event.target.classList.contains('addCart')) {
            let product_id = event.target.parentElement.dataset.id;
            addToCart(product_id);
        }
    });
}

// add item to cart
const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex(
        value => value.product_id == product_id
    );

    if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }

    addCartToHTML();
    addCartToMemory();
};

// save cart
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

// show cart
const addCartToHTML = () => {
    if (!listCartHTML) return;

    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    carts.forEach(cart => {
        totalQuantity += cart.quantity;

        let product = allProducts.find(value => value.id == cart.product_id);

        if (!product) return;

        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.dataset.id = cart.product_id;

        newCart.innerHTML = `
            <div class="image">
                <img src="images/${product.image}" alt="${product.name}">
            </div>
            <div class="name">${product.name}</div>
            <div class="totalPrice">$${product.price * cart.quantity}</div>
            <div class="quantity">
                <span class="minus">-</span>
                <span>${cart.quantity}</span>
                <span class="plus">+</span>
            </div>
        `;

        listCartHTML.appendChild(newCart);
    });

    if (iconCartSpan) {
        iconCartSpan.innerText = totalQuantity;
    }
};

// change quantity
if (listCartHTML) {
    listCartHTML.addEventListener('click', (event) => {
        let positionClick = event.target;

        if (
            positionClick.classList.contains('minus') ||
            positionClick.classList.contains('plus')
        ) {
            let product_id = positionClick.parentElement.parentElement.dataset.id;
            let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
            changeQuantity(product_id, type);
        }
    });
}

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex(
        value => value.product_id == product_id
    );

    if (positionItemInCart >= 0) {
        if (type === 'plus') {
            carts[positionItemInCart].quantity += 1;
        } else {
            let valueChange = carts[positionItemInCart].quantity - 1;

            if (valueChange > 0) {
                carts[positionItemInCart].quantity = valueChange;
            } else {
                carts.splice(positionItemInCart, 1);
            }
        }
    }

    addCartToHTML();
    addCartToMemory();
};

// decide which json file to show on page
const getProductFile = () => {
    let path = window.location.pathname;

    if (path.includes('clothing.html')) {
        return 'clothing.json';
    } else {
        return 'products.json';
    }
};

// start app
const initApp = async () => {
    try {
        let currentFile = getProductFile();

        const [currentResponse, productsResponse, clothingResponse] = await Promise.all([
            fetch(currentFile),
            fetch('products.json'),
            fetch('clothing.json')
        ]);

        const currentData = await currentResponse.json();
        const productsData = await productsResponse.json();
        const clothingData = await clothingResponse.json();

        listProduct = currentData;
        allProducts = [...productsData, ...clothingData];

        addDataToHTML();

        if (localStorage.getItem('cart')) {
            carts = JSON.parse(localStorage.getItem('cart'));
        }

        addCartToHTML();
    } catch (error) {
        console.log('Error loading products:', error);
    }
};

initApp();