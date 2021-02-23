import {LinkedList} from '../index';


describe('#LinkedList - constructor',() => {
    test("make empty list",() => {
        const freshList = new LinkedList<number>();

        expect(freshList.head).toBeNull();
        expect(freshList.length()).toBe(0);
    })
})