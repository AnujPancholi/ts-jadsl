import {LinkedList,ListNode} from '../index';


describe('#LinkedList - constructor',() => {
    test("make empty list",() => {
        const freshList = new LinkedList<number>();

        expect(freshList.head).toBeNull();
        expect(freshList.length()).toBe(0);
    })

    test("make list initialized with array",() => {
        const listData = [3,4,5,2,6,1,3];
        const freshList: LinkedList<number> = new LinkedList<number>(listData);

        expect(freshList.head===null).toBe(false);
        expect(freshList.length()).toEqual(listData.length);

        let w: ListNode<number> | null = freshList.head,i = 0;

        while(w!==null){
            expect(w.value).toEqual(listData[i]);
            ++i;
            w=w.next;
        }

        expect(w).toBeNull();
    })

    test("make empty list if empty array passed",() => {
        const freshList: LinkedList<number> = new LinkedList<number>([]);
        
        expect(freshList.head).toBeNull();
        expect(freshList.length()).toEqual(0);
    })
})