import itemsHelper from "../helpers/itemsHelper";

export default function renderBascetProducts(items) {
    let html = "";
    //itemsHelper.getItems

    if (items) {
        items.forEach(element => {
            let elemten = itemsHelper.getItem(element);

            html += renderBascetProduct(elemten);
        });
    }

    return html;
}
function renderBascetProduct(item) {
    return `<div class="main-contents-list-item">
        <img src=${item.image} class="main-contents-list-item_image">
        <h4 class="main-contents-list-item_title"> ${item.title}</h4>
            <p class="main-contents-list-item_description">
                    ${item.description}
            </p>
    </div>`;
}