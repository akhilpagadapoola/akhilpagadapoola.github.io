const { test, expect } = require('@jest/globals')
const object =require('./breakout')

test('contains',()=>{
    expect(object.visible).toBe(true)
})


test('contains', ()=>{
    expect(object.w).toBe(70)
})