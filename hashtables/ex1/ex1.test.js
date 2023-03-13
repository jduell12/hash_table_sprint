const { get_indices_of_item_weight } = require('./ex1')

describe('get_indices_of_item_weight', ()=>{
    it('[1] ex1_1', ()=>{
        expect(get_indices_of_item_weight([9], 1, 9)).toBeNull();
    })
    
    it('[2] ex1_2', ()=>{
        expect(get_indices_of_item_weight([4, 4], 2, 8)).toEqual([1, 0])
    })
    
    it('[3] ex1_3', ()=>{
        expect(get_indices_of_item_weight([4, 6, 10, 15, 16], 5, 21)).toEqual([3, 1])
    })
    
    it('[4] ex1_4', ()=>{
        expect(get_indices_of_item_weight([12, 6, 7, 14, 19, 3, 0, 25, 40], 9, 7)).toEqual([6, 2])
    })
})