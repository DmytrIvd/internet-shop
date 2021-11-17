const { bascet } = require("./helpers/bascetHelper");
const { renderBascetProducts } = require("./renderers/renderBascetProducts");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("items-list").innerHTML = renderBascetProducts(bascet.getItemsInBascet());
});