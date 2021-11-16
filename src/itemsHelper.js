export var itemsHelper = (function () {

    var methods = {};

    methods.addItem = function (item) {
        let items = JSON.parse(localStorage.getItem('items'));

        if (!items) {
            items = [];
        }

        items.push(item);
        console.log(items);

        localStorage.setItem('items', JSON.stringify(items));
    }

    methods.deleteItem = function (item) {
        let items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            let index = items.indexOf(item);

            if (index > -1) {
                items.splice(index, 1)
            }
        }

        localStorage.setItem(JSON.stringify(items))
    }

    methods.getItems = function () {
        let items = JSON.parse(localStorage.getItem('items'));

        return items;
    }

    methods.getItem = function (itemTitle) {
        let itemsStr = localStorage.getItem('items')

        if (itemsStr) {
            let items = JSON.parse(itemsStr);

            return items.find(l => l.title === itemTitle);
        }

        return false;
    }

    return methods;
})();