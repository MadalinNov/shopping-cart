//Selectors
const cart = document.getElementById("cart");
const closeCart = document.querySelector(".close-cart");
const sideCart = document.querySelector(".side-cart");
const addToCart = document.querySelectorAll(".add-to-cart");
const itemsList = document.querySelector(".side-cart-items");
let total = 0;
let products = [];
let previousButton = null;
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

    //cart items number indicator
    updateItemsNumber();

    //save to storage
    // products.push(sideBarItem.textContent);
    // console.log(localStorage.setItem("items", JSON.stringify(products)));

    //Remove items from cart (remove li from ul) && remove cart styling if cart is empty
    const sideBarButton = sideBarItem.querySelectorAll("button");
    sideBarButton.forEach(function (barButton) {
      barButton.textContent = "Remove";
      barButton.classList.remove("add-to-cart");
      barButton.classList.add("remove-from-cart");
      sideCart.querySelector("h1").textContent = "Your Items";
      barButton.addEventListener("click", function () {
        const deleteItem = barButton.parentNode.parentNode;
        deleteItem.parentNode.parentNode.removeChild(deleteItem.parentNode);
        if (!itemsList.hasChildNodes()) {
          cart.classList.remove("cart-item-in");
          sideCart.querySelector("h1").textContent = "Your cart it empty";
        }
        products.pop(sideBarItem);
        updateItemsNumber();
        totalPrice(barButton);
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
  if (input.classList.contains("add-to-cart")) {
    let addedItemsValue = parseFloat((total += priceNumber)).toFixed(2);
    document.querySelector("h2").textContent =
      "Total Price: $" + addedItemsValue;
  } else if (input.classList.contains("remove-from-cart")) {
    let substractedItemsValue = parseFloat((total -= priceNumber)).toFixed(2);
    document.querySelector("h2").textContent =
      "Total Price: $" + substractedItemsValue;
  }
}

//cart items number updater
function updateItemsNumber() {
  if (itemsList.getElementsByTagName("li").length >= 0) {
    document.querySelector(".items-number").style.display = "block";
    document.querySelector(
      ".items-number"
    ).textContent = itemsList.getElementsByTagName("li").length;
  }
}
