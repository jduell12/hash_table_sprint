import {Ticket, reconstruct_trip } from "./ex2";

describe('Reconstruct Trip', ()=>{
    it('[1] short case', ()=>{
        const t1 = Ticket('NONE', 'PDX');
        const t2 = Ticket('PDX', 'DCA');
        const t3 = Ticket('DCA', 'NONE');
        
        expect(reconstruct_trip([t1, t2, t3], 3)).toEqual(["PDX", "DCA", "NONE"])
    })
    
    it('[2] long case', ()=>{
        const t1 = Ticket("PIT", "ORD")
        const t2 = Ticket("XNA", "SAP")
        const t3 = Ticket("SFO", "BHM")
        const t4 = Ticket("FLG", "XNA")
        const t5 = Ticket("NONE", "LAX")
        const t6 = Ticket("LAX", "SFO")
        const t7 = Ticket("SAP", "SLC")
        const t8 = Ticket("ORD", "NONE")
        const t9 = Ticket("SLC", "PIT")
        const t10 = Ticket("BHM", "FLG")
        
        expect(reconstruct_trip([t1, t2, t3, t4, t5, t6, t7, t8, t9, t10], 10)).toEqual(["LAX", "SFO", "BHM", "FLG", "XNA", "SAP",
        "SLC", "PIT", "ORD", "NONE"])
    })
})