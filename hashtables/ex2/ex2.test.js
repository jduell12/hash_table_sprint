const {Ticket, reconstruct_trip } = require("./ex2") ;

describe('Reconstruct Trip', ()=>{
    it('[1] short case', ()=>{
        const t1 = new Ticket('NONE', 'PDX');
        const t2 = new Ticket('PDX', 'DCA');
        const t3 = new Ticket('DCA', 'NONE');
        
        expect(reconstruct_trip([t1, t2, t3], 3)).toEqual(["PDX", "DCA", "NONE"])
    })
    
    it('[2] long case', ()=>{
        const t1 = new Ticket("PIT", "ORD")
        const t2 = new Ticket("XNA", "SAP")
        const t3 = new Ticket("SFO", "BHM")
        const t4 = new Ticket("FLG", "XNA")
        const t5 = new Ticket("NONE", "LAX")
        const t6 = new Ticket("LAX", "SFO")
        const t7 = new Ticket("SAP", "SLC")
        const t8 = new Ticket("ORD", "NONE")
        const t9 = new Ticket("SLC", "PIT")
        const t10 = new Ticket("BHM", "FLG")
        
        expect(reconstruct_trip([t1, t2, t3, t4, t5, t6, t7, t8, t9, t10], 10)).toEqual(["LAX", "SFO", "BHM", "FLG", "XNA", "SAP",
        "SLC", "PIT", "ORD", "NONE"])
    })
})