import bascet from "./helpers/bascetHelper";
import renderBascetProducts from "./renderers/renderBascetProducts";

document.addEventListener("DOMContentLoaded", function () {
    console.log(renderBascetProducts);
    document.getElementById("items-list").innerHTML = renderBascetProducts(bascet.getItemsInBascet());
});