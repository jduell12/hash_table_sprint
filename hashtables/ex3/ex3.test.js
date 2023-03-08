import { intersection } from "./ex3";

describe('Intersection', ()=>{
    it('[1] small', ()=>{
        expect(intersection([
            [1,2,3],
            [1,4,5],
            [1,6,7]
        ])).toEqual([1])
        
        expect(intersection([
            [1],
            [1],
        ])).toEqual([1])
        
        expect(intersection([
            [1, 2],
            [1],
        ])).toEqual([1])
        
        expect((intersection([
            [1,2,3],
            [1,4,5,3],
            [1,6,7,3]
        ])).sort()).toEqual([1, 3])
    })
})