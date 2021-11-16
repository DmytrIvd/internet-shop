import { categories } from "./categoriesHelper"
import { itemsHelper } from "./itemsHelper";
import { Item } from "./Item"

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByName('category').item(0).innerHTML = categories.getCategories().map(t => `<option value="${t.id}">${t.name}</option>`)
    const form = document.getElementById('add-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        itemsHelper.addItem(new Item(formData.get('title'), formData.get('description'), formData.get('category'), formData.get('image')))
    })
});
