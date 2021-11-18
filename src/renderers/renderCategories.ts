import { Category } from "../entities/Category";

export default function renderCategories(categories: Category[]) {
    let html: string = '<a id="all-categories" key="category-unknown" href="?" class="pill-link filter-category">All</a>';

    categories.forEach(element => {
        html += `<a id='category-${element.id}' key=${element.id} href="?filter=${element.id}" class="pill-link filter-category">${element.name}</a>`;
    });

    return html;
}