import ListNode from '../ds/ListNode'


describe('#ListNode-constructor',() => {
    it('should construct new node with given data',() => {
        const data: number = 5;
        const freshNode = new ListNode<number>(5);

        expect(freshNode.value).toBe(data);
        expect(freshNode.next).toBe(null);
    })
})