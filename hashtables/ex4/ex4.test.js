const { has_negatives } = require("./ex4");

describe('has_negatives', ()=>{
    it('[1] small', ()=>{
        expect(has_negatives([1, 2, 3])).toEqual([])
        expect(has_negatives([1,2,3,-4])).toEqual([])
        expect((has_negatives([-1,-2,1,2,3,4,-4])).sort()).toEqual([1, 2, 4])
    })
})