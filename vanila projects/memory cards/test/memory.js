// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
//   };
//   global.localStorage = localStorageMock;

function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}
module.exports = getCardsData;
// jest.spyOn(window.localStorage.__proto__, 'getItem');
// window.localStorage.__proto__.getItem = jest.fn();