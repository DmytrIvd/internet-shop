const bascet = require("../helpers/bascetHelper");
const renderItem = require("./renderProduct");
module.exports = function renderProducts(items) {
    let html = "";

    if (items) {
        items.forEach(element => {
            let isInBascet = bascet.containsElement(element.title);

            html += renderItem(element, isInBascet);
        });
    }

    return html;
}