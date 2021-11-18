import categories from './helpers/categoriesHelper'
import itemsHelper from "./helpers/itemsHelper";
import { Item } from "./entities/Item"

const form = document.getElementById('add-form');

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByName('category').item(0).innerHTML = categories.getCategories().map(t => `<option value="${t.id}">${t.name}</option>`).toString();

    form.addEventListener('submit', onClick(form))
});

function onClick(form) {
    return function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let title = formData.get('title').valueOf() as string;

        if (itemsHelper.getItem(title)) {
            alert('This title already exists!');
            return;
        }

        let description: string = formData.get('description').valueOf() as string,
            category: number = +formData.get('category').valueOf(),
            image: string = formData.get('image').valueOf() as string;

        let item: Item = { title: title, description: description, category: category, image: image }
        // title, , formData.get('category'), formData.get('image'))
        itemsHelper.addItem(item);
        form.reset();
    };
}

