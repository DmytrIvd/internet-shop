/**
 * @jest-environment jsdom
 */
import indexModule from '../indexModule';
jest.mock('../helpers/bascetHelper');
describe('Testing click', () => {
    it("changes button/counter on click", () => {
        const bascet = require('../helpers/bascetHelper').default;


        bascet.containsElement.mockImplementation(_ => true);
        bascet.getLength.mockImplementation(_ => 0);

        document.body.innerHTML = `
                 <p id="bascet-count">1</p>
                 <button key="1" id="test-button">
                     Something meaningful
                 </button>`;

        const counter = document.getElementById('bascet-count');
        const button = document.getElementById('test-button');

        button.onclick = indexModule.clickBascetEvent;

        button.click();

        expect(counter.innerHTML).toBe('0');
        expect(button.innerHTML).toBe('Add to bascet');
        expect(!button.classList.contains('main-contents-list-item_addedToBascet'));

        //     expect(bascet.addElement).toBeCalled();
    })

    it('changes button/counter on click', () => {
        const bascet = require('../helpers/bascetHelper').default;
        const clickBascetEvent = require('../indexModule').default.clickBascetEvent;

        bascet.containsElement.mockImplementation(_ => false);
        bascet.getLength.mockImplementation(_ => 1);

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

        expect(bascet.addElement).toBeCalled();
    })
})