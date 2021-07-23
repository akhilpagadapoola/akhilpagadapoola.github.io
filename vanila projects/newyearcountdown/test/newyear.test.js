const find= require('./newyear')

test('to find the day',()=>{
    expect(find(2021)).toEqual(199)
})