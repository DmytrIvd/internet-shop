import { Item } from "../entities/Item";
import categories from "../helpers/categoriesHelper";

export default function renderItem(item: Item, isInBascet: boolean = false) {
    const category = categories.getItem(item.category);
    const buttonContent: string = `<button id='item-${item.title}' key=${item.title} 
    class="main-contents-list-item_addToBascet ${isInBascet ? "main-contents-list-item_addedToBascet" : ""}">
        ${isInBascet ? "Added to bascet" : "Add to bascet"}
    </button>`;

    return (`<div class="main-contents-list-item">
        <img src='${item.image}' class="main-contents-list-item_image" />
        <h4 class="main-contents-list-item_title">${item.title}</h4>
        <p class="main-contents-list-item_description">
            ${item.description}
        </p>
        <p class="main-contents-list-item_category">
           Category: ${category.name}
        </p>
        ${buttonContent}
    </div>`);
}