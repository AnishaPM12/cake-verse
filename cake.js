/* =====================================
   CakeVerse Home JavaScript
===================================== */

// ================= HERO SLIDER =================

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentSlide = 0;

const heroImage = document.getElementById("heroImage");

function changeHeroImage(){

    if(heroImage){

        currentSlide++;

        if(currentSlide >= heroImages.length){

            currentSlide = 0;

        }

        heroImage.src = heroImages[currentSlide];

    }

}

setInterval(changeHeroImage,4000);


// ================= SEARCH =================

// ================= SEARCH =================

const searchBox = document.getElementById("search");

if(searchBox){

    searchBox.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            let cakeName = product.querySelector("h3")
                                .innerText
                                .toLowerCase();

            if(cakeName.includes(value)){

                product.style.display = "block";

            }
            else{

                product.style.display = "none";

            }

        });

    });

}


// ================= STICKY NAV =================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 5px 25px rgba(0,0,0,.2)";

}

else{

nav.style.boxShadow="none";

}

});


// ================= ACTIVE MENU =================

const links=document.querySelectorAll("nav ul li a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});


// ================= SCROLL BUTTON =================

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="⬆";

scrollBtn.id="scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position="fixed";
scrollBtn.style.right="25px";
scrollBtn.style.bottom="25px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.border="none";
scrollBtn.style.background="#ff4d8d";
scrollBtn.style.color="#fff";
scrollBtn.style.fontSize="20px";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* =====================================
   ADD TO CART
===================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");

function updateCartCount(){

    if(cartCount){
        cartCount.innerHTML = cart.length;
    }

}

updateCartCount();

document.querySelectorAll(".product-card button").forEach(button=>{

button.addEventListener("click",function(){

const card=this.parentElement;

const cakeName=card.querySelector("h3").innerText;

const cakePrice=card.querySelector("h4").innerText;

cart.push({

name:cakeName,

price:cakePrice

});

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

showNotification(cakeName+" added to cart 🎂");

});

});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".product-card button").forEach(button => {

    button.addEventListener("click", function(){

        const card = this.parentElement;

        const cakeName = card.querySelector("h3").innerText;
        const cakePrice = card.querySelector("h4").innerText;

        cart.push({
            name: cakeName,
            price: cakePrice
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        document.getElementById("cartCount").innerText = cart.length;

        alert("Added to Cart");
    });

});

/* =====================================
   NOTIFICATION
===================================== */

function showNotification(message){

const notify=document.createElement("div");

notify.innerHTML=message;

notify.style.position="fixed";
notify.style.top="20px";
notify.style.right="20px";
notify.style.background="#ff4d8d";
notify.style.color="white";
notify.style.padding="15px 25px";
notify.style.borderRadius="10px";
notify.style.fontWeight="bold";
notify.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";
notify.style.zIndex="9999";

document.body.appendChild(notify);

setTimeout(()=>{

notify.remove();

},2500);

}


/* =====================================
   PRODUCT HOVER EFFECT
===================================== */

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";
card.style.transition=".3s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* =====================================
   NEWSLETTER
===================================== */

const subscribeBtn=document.querySelector(".newsletter button");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

if(email==""){

alert("Please enter your email.");

}

else{

showNotification("Subscribed Successfully ❤️");

document.querySelector(".newsletter input").value="";

}

});

}


/* =====================================
   OFFER POPUP
===================================== */

setTimeout(()=>{

alert("🎉 Welcome! Use code CAKE40 to get 40% OFF.");

},3000);
/* =====================================
   WISHLIST
===================================== */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".wishlist-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".product-card");

        const cake = card.querySelector("h3").innerText;
        const price = card.querySelector("h4").innerText;

        wishlist.push({
            name: cake,
            price: price
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        showNotification("❤️ Added to Wishlist");

    });

});


/* =====================================
   REVIEW SLIDER
===================================== */

let reviewIndex = 0;

const reviews = document.querySelectorAll(".review-card");

function reviewSlider(){

    if(reviews.length===0) return;

    reviews.forEach(review=>{

        review.style.display="none";

    });

    reviews[reviewIndex].style.display="block";

    reviewIndex++;

    if(reviewIndex>=reviews.length){

        reviewIndex=0;

    }

}

reviewSlider();

setInterval(reviewSlider,4000);


/* =====================================
   CATEGORY FILTER
===================================== */

const categories=document.querySelectorAll(".category-card");

categories.forEach(category=>{

category.addEventListener("click",()=>{

showNotification(category.innerText+" Selected");

});

});


/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});


/* =====================================
   DARK MODE
===================================== */

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}


/* =====================================
   MOBILE MENU
===================================== */

const menu=document.getElementById("menuBtn");

const nav=document.querySelector("nav ul");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}


/* =====================================
   HERO BUTTON
===================================== */

const shop=document.querySelector(".shop-btn");

if(shop){

shop.onclick=()=>{

window.location="cakes.html";

};

}

const custom=document.querySelector(".custom-btn");

if(custom){

custom.onclick=()=>{

alert("Cake Customization Coming Soon 🎂");

};


/* =====================================
   CURRENT YEAR
===================================== */

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
