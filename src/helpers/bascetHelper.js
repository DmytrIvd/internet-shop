function getItemsInBascet() {
    let itemsStr = sessionStorage.getItem('bascet-items');
    let items = [];

    if (itemsStr) {
        items = JSON.parse(itemsStr);
    }

    return items;
}

function containsElement(item_title) {
    let itemsStr = sessionStorage.getItem('bascet-items')

    if (itemsStr) {
        let items = JSON.parse(itemsStr);

        return items.includes(item_title);
    }

    return false;
}

function addElement(item) {
    let items = JSON.parse(sessionStorage.getItem('bascet-items'));

    if (!items) {
        items = [];
    }

    items.push(item);

    sessionStorage.setItem('bascet-items', JSON.stringify(items));
}

function deleteElement(item) {
    let items = JSON.parse(sessionStorage.getItem('bascet-items'));

    if (items) {
        let index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1)
        }
    }

    sessionStorage.setItem('bascet-items', JSON.stringify(items));
}

module.exports = { getItemsInBascet, containsElement, addElement, deleteElement };