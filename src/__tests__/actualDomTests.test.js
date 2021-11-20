/**
 * @jest-environment jsdom
 */
'use strict';
jest.mock('../helpers/bascetHelper');
test('changes button/counter on click', () => {
    const { containsElement, getItemsInBascet, addElement } = require('../helpers/bascetHelper');
    const { clickBascetEvent } = require('../indexModule');

    containsElement.mockImplementation(_ => false);
    getItemsInBascet.mockImplementation(_ => Array(1));

    document.body.innerHTML = `
         <p id="bascet-count">0</p>
         <button key="1" id="test-button">
             Something meaningful
         </button>`;

    const counter = document.getElementById('bascet-count');
    const button = document.getElementById('test-button');

    button.onclick = clickBascetEvent;

    button.click();

    expect(counter.innerHTML).toBe('1');
    expect(button.innerHTML).toBe('Added to bascet');
    expect(button.classList.contains('main-contents-list-item_addedToBascet'));

    expect(addElement).toBeCalled();
})
test('changes button/counter on click', () => {
    const { containsElement, getItemsInBascet, addElement } = require('../helpers/bascetHelper');
    const { clickBascetEvent } = require('../indexModule');

    containsElement.mockImplementation(_ => true);
    getItemsInBascet.mockImplementation(_ => Array(0));

    document.body.innerHTML = `
         <p id="bascet-count">1</p>
         <button key="1" id="test-button" class="main-contents-list-item_addedToBascet">
             Something meaningful
         </button>`;

    const counter = document.getElementById('bascet-count');
    const button = document.getElementById('test-button');

    button.onclick = clickBascetEvent;

    button.click();

    expect(counter.innerHTML).toBe('0');
    expect(button.innerHTML).toBe('Add to bascet');
    expect(!button.classList.contains('main-contents-list-item_addedToBascet'));

    expect(addElement).toBeCalled();
})