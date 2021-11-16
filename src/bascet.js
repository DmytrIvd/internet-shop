const { bascet } = require("./bascetHelper");
const { renderBascetProducts } = require("./renderBascetProducts");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("items-list").innerHTML = renderBascetProducts(bascet.getItemsInBascet());
});