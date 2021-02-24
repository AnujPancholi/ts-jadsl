import ListNode from './ListNode'

class LinkedList<T>{
    private _head: ListNode<T> | null;
    private _tail: ListNode<T> | null;
    private _length: number;

    constructor(initArray: T[]);
    constructor();
    constructor(initArray?: T[]){
        this._head = null;
        this._tail = null;
        this._length = 0;
        if(initArray){
            for(const item of initArray){
                const freshNode = new ListNode<T>(item);
                if(this._tail===null){
                    this._head = freshNode;
                } else {
                    this._tail.next = freshNode;
                }
                this._tail = freshNode;
                ++this._length;
            }
        }
    }

    length(): number{
        return this._length;
    }

    get(index: number): T | null {
        if(index<0 || index>=this._length){
            return null;
        }
        let walkerNode: ListNode<T> | null = this._head;
        for(let i=0;i<index;++i){
            walkerNode = walkerNode?.next || null;
        }

        return walkerNode?.value ?? null;
    }
}

export default LinkedList;