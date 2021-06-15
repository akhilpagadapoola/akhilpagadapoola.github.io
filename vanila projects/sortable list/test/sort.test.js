// const richestPeople = require('./sort')

// test('contains richest people', () => {
//     expect(richestPeople).toContain('Mark Zuckerberg');
    
//   });


const { test, expect } = require('@jest/globals')
const random = require('./sort')

test('contains', ()=> {
    expect(random).toBeTruthy();
})