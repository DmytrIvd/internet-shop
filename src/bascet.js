const bascet = require("./helpers/bascetHelper");
const renderBascetProducts = require("./renderers/renderBascetProducts");

document.addEventListener("DOMContentLoaded", function () {
    console.log(renderBascetProducts);
    document.getElementById("items-list").innerHTML = renderBascetProducts(bascet.getItemsInBascet());
});