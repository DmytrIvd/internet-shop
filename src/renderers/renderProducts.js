import { bascet } from "../helpers/bascetHelper";
import { renderItem } from "./renderProduct";

export function renderProducts(items) {
    let html = "";
    //itemsHelper.getItems

    if (items) {
        items.forEach(element => {
            let isInBascet = bascet.containsElement(element.title);

            html += renderItem(element, isInBascet);
        });
    }

    return html;
}