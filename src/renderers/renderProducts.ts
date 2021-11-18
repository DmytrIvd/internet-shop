import { Item } from "../entities/Item";
import bascet from "../helpers/bascetHelper";
import renderItem from "./renderProduct";
export default function renderProducts(items: Item[]) {
    let html: string = "";

    if (items) {
        items.forEach(element => {
            let isInBascet = bascet.containsElement(element.title);

            html += renderItem(element, isInBascet);
        });
    }

    return html;
}