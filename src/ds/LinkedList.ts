import ListNode from './ListNode'

class LinkedList<T>{
    head: ListNode<T> | null;
    private _length: number;

    constructor(initArray: T[]);
    constructor();
    constructor(initArray?: T[]){
        this.head = null;
        this._length = 0;
        let tail: ListNode<T> | null = null;
        if(initArray){
            for(const item of initArray){
                const freshNode = new ListNode<T>(item);
                if(tail===null){
                    this.head = freshNode;
                } else {
                    tail.next = freshNode;
                }
                tail = freshNode;
                ++this._length;
            }
        }
    }

    length(): number{
        return this._length;
    }
}

export default LinkedList;