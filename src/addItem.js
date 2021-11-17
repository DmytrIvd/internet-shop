import { categories } from './helpers/categoriesHelper'
import { itemsHelper } from "./helpers/itemsHelper";
import { Item } from "./Item"

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByName('category').item(0).innerHTML = categories.getCategories().map(t => `<option value="${t.id}">${t.name}</option>`)
    const form = document.getElementById('add-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let title = formData.get('title')

        if (itemsHelper.getItem(title)) {
            alert('This title already exists!');
            return;
        }

        itemsHelper.addItem(new Item(title, formData.get('description'), formData.get('category'), formData.get('image')));
        form.reset();
    })
});
