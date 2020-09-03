//Selectors
const cart = document.getElementById("cart");
const closeCart = document.querySelector(".close-cart");
const sideCart = document.querySelector(".side-cart");
const addToCart = document.querySelectorAll(".add-to-cart");
const itemsList = document.querySelector(".side-cart-items");
//Event Listeners
//////
//cart slide in / out
cart.addEventListener("click", function () {
  sideCart.classList.add("cart-active");
});
closeCart.addEventListener("click", function () {
  sideCart.classList.remove("cart-active");
});

//cart functionality
addToCart.forEach(function (button) {
  button.addEventListener("click", function () {
    //Cart animation
    cart.classList.add("cart-item-in");
    cart.classList.add("cart-icon-active");
    setTimeout(removeClass, 100);
    //item clone and add to cart
    const newListItem = document.createElement("li");
    itemsList.appendChild(newListItem);
    const buttonParent = button.parentElement;
    const item = buttonParent.parentElement;
    const sideBarItem = item.cloneNode(true);
    newListItem.appendChild(sideBarItem);
    //remove cart styling if cart is empty
    if (itemsList.hasChildNodes() === false) {
      cart.classList.remove("cart-item-in");
    }
    //Remove items from cart (remove li from ul)
    const sideBarButton = sideBarItem.querySelectorAll("button");
    sideBarButton.forEach(function (barButton) {
      barButton.textContent = "Remove";
      barButton.addEventListener("click", function () {
        const deleteItem = barButton.parentNode.parentNode;
        deleteItem.parentNode.parentNode.removeChild(deleteItem.parentNode);
      });
    });
    //total price update
    totalPrice(button);
  });
});
//functions
//remove cart animation
function removeClass() {
  if (cart.classList.contains("cart-icon-active")) {
    cart.classList.remove("cart-icon-active");
  }
}
//total price calculator
function totalPrice(input) {
  const price = input.previousSibling.previousElementSibling.innerHTML.slice(1);
  let priceNumber = parseFloat(price);
  const cartPrice = document.querySelector("h2");
  let cartTotalPrice = priceNumber;
  let previousPrice = 0;
}
