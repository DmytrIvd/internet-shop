export var bascet = (function () {
    var methods = {};

    methods.getItemsInBascet = function () {
        let itemsStr = sessionStorage.getItem('bascet-items');
        let items = [];

        if (itemsStr) {
            items = JSON.parse(itemsStr);
        }

        return items;
    }

    methods.containsElement = function (item_title) {
        let itemsStr = sessionStorage.getItem('bascet-items')

        if (itemsStr) {
            let items = JSON.parse(itemsStr);

            return items.includes(item_title);
        }

        return false;
    }

    methods.addElement = function (item) {
        let items = JSON.parse(sessionStorage.getItem('bascet-items'));

        if (!items) {
            items = [];
        }

        items.push(item);

        sessionStorage.setItem('bascet-items', JSON.stringify(items));
    }

    methods.deleteElement = function (item) {
        let items = JSON.parse(sessionStorage.getItem('bascet-items'));

        if (items) {
            let index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1)
            }
        }

        sessionStorage.setItem('bascet-items', JSON.stringify(items));
    }

    return methods
})();