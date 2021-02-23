import ListNode from './ListNode'

class LinkedList<T>{
    head: ListNode<T> | null;
    #length: number;

    constructor(initArray: T[]);
    constructor();
    constructor(initArray?: T[]){
        this.head = null;
        this.#length = 0;
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
                ++this.#length;
            }
        }
    }

    length(): number{
        return this.#length;
    }
}

export default LinkedList;