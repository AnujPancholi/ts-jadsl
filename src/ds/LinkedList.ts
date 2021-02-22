import ListNode from './ListNode'

class LinkedList<T>{
    head: ListNode<T> | null;

    constructor(){
        this.head = null;
    }
}

export default LinkedList;