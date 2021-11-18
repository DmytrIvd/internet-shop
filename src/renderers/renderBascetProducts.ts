import { Item } from "../entities/Item";
import itemsHelper from "../helpers/itemsHelper";

export default function renderBascetProducts(items: string[]) {
    let html: string = "";
    //itemsHelper.getItems

    if (items) {
        items.forEach(key => {
            let element = itemsHelper.getItem(key);

            if (element) {
                html += renderBascetProduct(element);
            }
        });
    }

    return html;
}
function renderBascetProduct(item: Item) {
    return `<div class="main-contents-list-item">
        <img src='${item.image}' class="main-contents-list-item_image">
        <h4 class="main-contents-list-item_title"> ${item.title}</h4>
            <p class="main-contents-list-item_description">
                    ${item.description}
            </p>
    </div>`;
}