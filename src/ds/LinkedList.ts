import ListNode from "./ListNode";

class LinkedList<T> {
  protected _head: ListNode<T> | null;
  protected _tail: ListNode<T> | null;
  protected _length: number;

  constructor(initArray: T[]);
  constructor();
  constructor(initArray?: T[]) {
    this._head = null;
    this._tail = null;
    this._length = 0;
    if (initArray) {
      for (const item of initArray) {
        const freshNode = new ListNode<T>(item);
        if (this._tail === null) {
          this._head = freshNode;
        } else {
          this._tail.next = freshNode;
        }
        this._tail = freshNode;
        ++this._length;
      }
    }
  }

  length(): number {
    return this._length;
  }

  //if the user wishes to forgo the abstraction and reference the head node of the list
  getHeadNode(): ListNode<T> | null {
    return this._head;
  }

  get(index: number): T | null {
    if (index < 0 || index >= this._length) {
      return null;
    }
    let walkerNode: ListNode<T> | null = this._head;
    for (let i = 0; i < index && walkerNode !== null; ++i) {
      walkerNode = walkerNode.next;
    }

    return walkerNode?.value ?? null;
  }

  insertAt(index: number, value: T): LinkedList<T> {
    if (index >= 0 && index <= this._length) {
      const freshNode = new ListNode<T>(value);

      if (index === 0) {
        freshNode.next = this._head;
        this._head = freshNode;
        if (this._head && this._head.next === null) {
          this._tail = this._head;
        }
      } else {
        let walker: ListNode<T> | null = this._head;
        for (let i = 0; i < index - 1 && walker !== null; ++i) {
          walker = walker.next;
        }
        freshNode.next = walker ? walker.next : null;
        if (walker === this._tail) {
          this._tail = freshNode;
        }
        if (walker) {
          walker.next = freshNode;
        }
      }
      ++this._length;
    }
    return this;
  }

  deleteAt(index: number): T | null {
    let deletedVal: T | null = null;
    if (index >= 0 && index < this._length) {
      if (index === 0) {
        const nodeToDelete = this._head;
        this._head = this._head?.next ?? null;
        if (nodeToDelete) {
          deletedVal = nodeToDelete.value;
          nodeToDelete.next = null;
        }
      } else {
        let i = 0,
          walkerNode: ListNode<T> | null = this._head;
        while (i < index - 1 && walkerNode !== null) {
          walkerNode = walkerNode.next;
          ++i;
        }
        const nodeToDelete = walkerNode?.next || null;
        if (nodeToDelete && walkerNode) {
          deletedVal = nodeToDelete.value;
          walkerNode.next = nodeToDelete.next;
          if (walkerNode.next === null) {
            this._tail = walkerNode;
          }
          nodeToDelete.next = null;
        }
      }

      --this._length;
    }

    return deletedVal;
  }

  insertAtHead(value: T): LinkedList<T> {
    const freshNode = new ListNode<T>(value);
    freshNode.next = this._head;
    this._head = freshNode;
    if (this._tail === null && freshNode.next === null) {
      this._tail = freshNode;
    }
    ++this._length;
    return this;
  }

  insertAtTail(value: T): LinkedList<T> {
    const freshNode = new ListNode<T>(value);
    if (this._tail === null) {
      this._head = freshNode;
      this._tail = freshNode;
    } else {
      this._tail.next = freshNode;
      this._tail = freshNode;
    }

    ++this._length;

    return this;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let walker: ListNode<T> | null = this._head;
    while (walker !== null) {
      arr.push(walker.value);
      walker = walker.next;
    }
    return arr;
  }
}

export default LinkedList;
