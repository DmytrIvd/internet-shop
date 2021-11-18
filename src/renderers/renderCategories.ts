export default function renderCategories(categories) {
    let html = '<a id="all-categories" key="category-unknown" href="?" class="pill-link filter-category">All</a>';

    categories.forEach(element => {
        html += `<a id='category-${element.id}' key=${element.id} href="?filter=${element.id}" class="pill-link filter-category">${element.name}</a>`;
    });

    return html;
}