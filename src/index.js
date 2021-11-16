import { bascet } from "./bascetHelper";
import { itemsHelper } from "./itemsHelper";
import { renderCategories } from "./renderCategories";
import { renderProducts } from "./renderProducts";

window.onscroll = function () { onScrollFooter() };

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScrollFooter() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  let params = (new URL(document.location)).searchParams;
  let filter = params.get('filter');

  let items = itemsHelper.getItems();

  if (filter) {
    items = items.filter(i => i.category === filter);
  }

  document.getElementById("items-list").innerHTML = renderProducts(items);
  document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length;
  document.getElementById('categories').innerHTML = renderCategories();

  document.querySelectorAll(".main-contents-list-item_addToBascet").forEach((button) => {

    button.addEventListener("click", (event) => {
      let element = event.target;
      let key = event.target.getAttribute("key");

      if (bascet.containsElement(key)) {
        element.innerHTML = "Add to bascet";
        bascet.deleteElement(key);
      } else {
        element.innerHTML = "Added to bascet";
        bascet.addElement(key);
      }

      document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length;
    });
  });
});