let cartCount = 0;
let total = 0;

window.onload = () => {
    filterProducts('earphones', document.querySelector('.cat-btn'));
};

function updateCart(change, price, btn) {
    let qtySpan = btn.parentElement.querySelector(".qty");
    let qty = parseInt(qtySpan.innerText);

    if (change === -1 && qty === 0) return;

    qty += change;
    qtySpan.innerText = qty;

    cartCount += change;
    total += change * price;

    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("totalPrice").innerText = total;
}

function filterProducts(category, button) {
    let products = document.querySelectorAll(".product-card");
    let buttons = document.querySelectorAll(".cat-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    products.forEach(item => {
        item.style.display = item.classList.contains(category) ? "block" : "none";
    });
}

function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}