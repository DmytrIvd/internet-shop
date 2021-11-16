export function renderItem(item, isInBascet = false) {

    const buttonContent = `<button id='item-${item.title}' key=${item.title} class="main-contents-list-item_addToBascet">${isInBascet ? "Added" : "Add to bascet"}</button>`;

    return (`<div class="main-contents-list-item">
        <img src='${item.image}' class="main-contents-list-item_image" />
        <h4 class="main-contents-list-item_title">${item.title}</h4>
        <p class="main-contents-list-item_description">
            ${item.description}
        </p>
        <p class="main-contents-list-item_category">
           Category: ${item.category}
        </p>
        ${buttonContent}
    </div>`);
}