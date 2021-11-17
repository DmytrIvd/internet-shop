const renderCategories = require("./renderers/renderCategories");
const renderProducts = require("./renderers/renderProducts");

const bascet = require("./helpers/bascetHelper");
const itemsHelper = require("./helpers/itemsHelper");

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

function InitElements() {
    let filteredItems = filterItems();

    document.getElementById("items-list").innerHTML = renderProducts(filteredItems);
    document.getElementById("bascet-count").innerHTML = bascet.getItemsInBascet().length;
    document.getElementById('categories').innerHTML = renderCategories();
}

module.exports = { InitElements, clickBascetEvent, filterItems };
