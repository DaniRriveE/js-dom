const h1 = document.querySelector('h1');
h1.innerHTML += " <i>DOM</i>";
h1.classList.add('mark');

setInterval(updateClock, 1000);
function updateClock() {
    const clockContainer = document.querySelector(".clock");
    clockContainer.innerText = (new Date().toLocaleTimeString());
}



const products = ["Mark II", "R32", "Supra", "Opel Vectra"];

function displayProducts(products) {
    const container = document.querySelector(".products");
    container.innerHTML = '';
    for (const product of products) {
        container.innerHTML += '<p class="product">' + product + '</p>';
    }
}


const showProductsBtn = document.querySelector('.showProducts');
showProductsBtn.addEventListener('click', () => displayProducts(products));


const addProductBtn = document.querySelector