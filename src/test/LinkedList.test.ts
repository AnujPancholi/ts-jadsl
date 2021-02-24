import {LinkedList} from '../index';


describe('#LinkedList - constructor',() => {
    test("make empty list",() => {
        const freshList = new LinkedList<number>();

        expect(freshList.get(0)).toBeNull();
        expect(freshList.length()).toBe(0);
    })

    test("make list initialized with array",() => {
        const listData = [3,4,5,2,6,1,3];
        const freshList: LinkedList<number> = new LinkedList<number>(listData);

        expect(freshList.length()).toEqual(listData.length);

    })

    test("make empty list if empty array passed",() => {
        const freshList: LinkedList<number> = new LinkedList<number>([]);
        
        expect(freshList.get(0)).toBeNull();
        expect(freshList.length()).toEqual(0);
    })
})

describe('#LinkedList - get',() => {
    const listData = [5,6,4,5,6,67,342432,4,5,6,23,4,0]
    const list = new LinkedList<number>(listData);

    test('fetch values for valid indices',() => {
        for(let i = 0;i<listData.length;++i){
            expect(list.get(i)).toEqual(listData[i]);
        }
    })

    test('fetch null for invalid indices',() => {
        expect(list.get(-1)).toBeNull();
        expect(list.get(listData.length)).toBeNull();
    })

})