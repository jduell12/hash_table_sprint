const { finder } = require("./ex5");

describe('finder', ()=>{
    it('[1] small', ()=>{
        const  files = [
            '/bin/foo',
            '/bin/bar',
            '/usr/bin/baz'
        ]
        let queries = [
            "foo",
            "qux",
            "baz"
        ]
        let result = finder(files, queries)
        expect(result).toEqual(['/bin/foo', '/usr/bin/baz'])
        
        queries = [
            "qux"
        ]
        result = finder(files, queries)
        expect(result).toEqual([])
    })
    
    it('[1] large', ()=>{
        const files = []
        
        for(let i =0; i < 500000; i++){
            files.push(`/dir/${i}/file/${i}`)
        }
        
        for(let i =0; i < 500000; i++){
            files.push(`/dir/${i}/dirb/${i}/file/${i}`)
        }
        
        const queries = []
        for(let i =0; i < 500000; i++){
            queries.push(`file${i}`)
        }
        
        const result = finder(files, queries)
        result.sort()
        expect(result).toEqual(['/dir256/dirb256/file256',
        '/dir256/file256', '/dir3490/dirb3490/file3490',
        '/dir3490/file3490', '/dir8192/dirb8192/file8192',
        '/dir8192/file8192'])
    })
})