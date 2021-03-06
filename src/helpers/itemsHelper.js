function addItem(item) {
    let items = JSON.parse(localStorage.getItem('items'));

    if (!items) {
        items = [];
    }

    items.push(item);
    console.log(items);

    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItem(item) {
    let items = JSON.parse(localStorage.getItem('items'));

    if (items) {
        let index = items.indexOf(item);

        if (index > -1) {
            items.splice(index, 1)
        }
    }

    localStorage.setItem(JSON.stringify(items))
}

function getItems() {
    let items = JSON.parse(localStorage.getItem('items'));

    return items;
}

function getItem(itemTitle) {
    let itemsStr = localStorage.getItem('items')

    if (itemsStr) {
        let items = JSON.parse(itemsStr);

        return items.find(l => l.title === itemTitle);
    }

    return false;
}

module.exports = { addItem, deleteItem, getItems, getItem }
