import renderCategories from "./renderers/renderCategories";
import renderProducts from "./renderers/renderProducts";

import bascet from "./helpers/bascetHelper";
import itemsHelper from "./helpers/itemsHelper";
import categories from "./helpers/categoriesHelper";

function filterItems() {
    let params = (new URL(document.location.toString())).searchParams;
    let filter = params.get('filter');

    let items = itemsHelper.getItems();

    if (filter) {
        items = items.filter(i => i.category.toString() === filter);
    }

    return items;
}

function clickBascetEvent(event: any) {
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

    document.getElementById("bascet-count").innerHTML = bascet.getLength().toString();
}

function InitElements() {
    let filteredItems = filterItems();

    document.getElementById("items-list").innerHTML = renderProducts(filteredItems);
    document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length.toString();
    document.getElementById('categories').innerHTML = renderCategories(categories.getCategories());
}

export default { InitElements, clickBascetEvent, filterItems };
