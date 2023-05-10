let orangecolor = document.querySelector('.orange');
let bluecolor = document.querySelector('.blue');
let greencolor = document.querySelector('.green');
let blackcolor = document.querySelector('.black');
let redcolor = document.querySelector('.red');
let share = document.querySelector(".logo-and-share i");
let badge = document.querySelector(".badge");
let price = document.querySelector(".buy-price span");
let priceBtn = document.querySelector(".priceBtn");

orangecolor.addEventListener("click",() => {
    let img = document.getElementById("product-img");
    let productpreview = document.querySelector(".product-preview");
    img.src = 'images/orange.png';
    productpreview.style.background = "linear-gradient(to right, #fc521e, #f9a630)";
    share.style.color = "#fc521e";
    badge.style.background = "#fc521e";
    priceBtn.style.background = "#fc521e";
    price.innerHTML = `<sup><i class="bi bi-currency-rupee"></i></sup>2000`;
})
bluecolor.addEventListener("click",() => {
    let img = document.getElementById("product-img");
    let productpreview = document.querySelector(".product-preview");
    img.src = 'images/blue.png';
    productpreview.style.background = "linear-gradient(45deg, #0136af, #22abfa)";
    share.style.color = "#2175f5";
    badge.style.background = "#2175f5";
    priceBtn.style.background = "#2175f5";
    price.innerHTML = `<sup><i class="bi bi-currency-rupee"></i></sup>2500`;
})
redcolor.addEventListener("click",() => {
    let img = document.getElementById("product-img");
    let productpreview = document.querySelector(".product-preview");
    img.src = 'images/red.png';
    productpreview.style.background = "linear-gradient(45deg, #d62926, #ee625f)";
    share.style.color = "#f84848";
    badge.style.background = "#f84848";
    priceBtn.style.background = "#f84848";
    price.innerHTML = `<sup><i class="bi bi-currency-rupee"></i></sup>1899`;
})
greencolor.addEventListener("click",() => {
    let img = document.getElementById("product-img");
    let productpreview = document.querySelector(".product-preview");
    img.src = 'images/green.png';
    productpreview.style.background = "linear-gradient(45deg, #11998e, #1ce669)";
    share.style.color = "#29b864";
    badge.style.background = "#29b864";
    priceBtn.style.background = "#29b864";
    price.innerHTML = `<sup><i class="bi bi-currency-rupee"></i></sup>2999`;
})
blackcolor.addEventListener("click",() => {
    let img = document.getElementById("product-img");
    let productpreview = document.querySelector(".product-preview");
    img.src = 'images/black.png';
    productpreview.style.background = "linear-gradient(45deg, #111, #666)";
    share.style.color = "#444";
    badge.style.background = "#444";
    priceBtn.style.background = "#444";
    price.innerHTML = `<sup><i class="bi bi-currency-rupee"></i></sup>2299`;
})