
// const localStorage = require('./memory');
// test('localstorage', ()=>{
//     expect(localStorage.getItem.mock.calls.length).toBe(1)
// });

// const { test } = require('@jest/globals');
// // const localStorage = require('./memory');
// test('localstorage', ()=>{
//     expect(localStorage.getItem.mock.calls.length).toBe(1)
// });


const { test } = require('@jest/globals');
// const local = require('./memory');
test('localstorage test', ()=>{
    expect(ltest.getItem).toHaveBeenCalled();
})


