export var categories = (function () {
    var methods = {};

    methods.getCategories = function () {
        let categoriesStr = localStorage.getItem('categories');
        let categories = [];

        if (!categoriesStr) {
            categories = [
                { id: '1', name: "Something nasty" },
                { id: '2', name: "Something spicy" },
                { id: '3', name: "Something delicious" },
            ];

            localStorage.setItem('categories', JSON.stringify(categories));
        } else {
            categories = JSON.parse(categoriesStr);
        }

        return categories;
    }

    methods.getItem = function (id) {
        let itemsStr = localStorage.getItem('categories')


        let items = JSON.parse(itemsStr);

        return items.find(l => l.id === id);
    }

    return methods;
})();