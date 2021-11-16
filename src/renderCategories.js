import { categories } from "./categoriesHelper";

export function renderCategories() {
    let html = "";
    let cat = categories.getCategories();
    cat.forEach(element => {
        html += `<a id='category-${element.id}' key=${element.id} href="#" class="pill-link filter-category">${element.name}</a>`;
    });

    return html;
}