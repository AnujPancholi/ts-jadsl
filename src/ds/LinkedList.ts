import ListNode from './ListNode'

class LinkedList<T>{
    head: ListNode<T> | null;
    #length: number;

    constructor(){
        this.head = null;
        this.#length = 0;
    }

    length(): number{
        return this.#length;
    }
}

export default LinkedList;