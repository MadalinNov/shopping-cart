//SELECTORS
const cart = document.getElementById("cart");
const cartClose = document.getElementById("close-sidebar");
const addToCart = document.querySelectorAll(".add-cart");
//EVENT LISTENERS

//CART TOGGLER
cart.addEventListener("click", function () {
  const cartSidebar = document.querySelector(".sidebar");
  cartSidebar.classList.add("sidebar-active");
});
cartClose.addEventListener("click", function () {
  const cartSidebar = document.querySelector(".sidebar");
  cartSidebar.classList.remove("sidebar-active");
});
//ADD TO CART BUTTON FUNCTIONALITY
addToCart.forEach(function (button) {
  button.addEventListener("click", function () {
    cart.classList.add("item-in-cart");
    cart.classList.add("cart-active");
    setTimeout(removeActive, 100);
    const buttonParrent = button.parentElement;
    const item = buttonParrent.parentElement;
    const cloneItem = item.cloneNode(true);
    const newListItem = document.createElement("li");
    document.querySelector(".sidebar-list").appendChild(newListItem);
    newListItem.appendChild(cloneItem);
  });
});
//FUNCTIONS
//REMOVE ACTIVE CLASS FROM CONAINTER
function removeActive() {
  if (cart.classList.contains("cart-active")) {
    cart.classList.remove("cart-active");
  }
}
