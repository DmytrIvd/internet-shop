import { configureHeader } from "./header";
import { bascet } from "./helpers/bascetHelper";
import { itemsHelper } from "./helpers/itemsHelper";
import { renderCategories } from "./renderers/renderCategories";
import { renderProducts } from "./renderers/renderProducts";

configureHeader();

document.addEventListener("DOMContentLoaded", function () {

  InitElements();

  document.querySelectorAll(".main-contents-list-item_addToBascet").forEach((button) => {
    button.addEventListener("click", clickBascetEvent);
  });
});

function InitElements() {
  let filteredItems = filterItems();

  document.getElementById("items-list").innerHTML = renderProducts(filteredItems);
  document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length;
  document.getElementById('categories').innerHTML = renderCategories();
}

function filterItems() {
  let params = (new URL(document.location)).searchParams;
  let filter = params.get('filter');

  let items = itemsHelper.getItems();

  if (filter) {
    items = items.filter(i => i.category === filter);
  }

  return items;
}

function clickBascetEvent(event) {
  let element = event.target;
  let key = event.target.getAttribute("key");

  element.classList.toggle("main-contents-list-item_addedToBascet");

  if (bascet.containsElement(key)) {
    element.innerHTML = "Add to bascet";
    bascet.deleteElement(key);
  } else {
    element.innerHTML = "Added to bascet";
    bascet.addElement(key);
  }

  document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length;
}
