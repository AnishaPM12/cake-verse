let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

if(cart.length == 0){

    cartItems.innerHTML = "<h2 style='text-align:center;'>Your Cart is Empty</h2>";

}
else{

    cart.forEach(item=>{

        cartItems.innerHTML += `
        <div class="product-card">
            <h3>${item.name}</h3>
            <h4>${item.price}</h4>
        </div>
        `;

    });

}