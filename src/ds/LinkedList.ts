import ListNode from "./ListNode";

class LinkedList<T> {
  private _head: ListNode<T> | null;
  private _tail: ListNode<T> | null;
  private _length: number;

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

  get(index: number): T | null {
    if (index < 0 || index >= this._length) {
      return null;
    }
    let walkerNode: ListNode<T> | null = this._head;
    for (let i = 0; i < index; ++i) {
      walkerNode = walkerNode?.next || null;
    }

    return walkerNode?.value ?? null;
  }

  insertAt(index: number, value: T): LinkedList<T> {
    if (index < 0 || index > this._length) {
      return this;
    }

    const freshNode = new ListNode<T>(value);

    if (index === 0) {
      freshNode.next = this._head;
      this._head = freshNode;
      if (this._head && this._head.next === null) {
        this._tail = this._head;
      }
    } else {
      let walker: ListNode<T> | null = this._head;
      for (let i = 0; i < index - 1; ++i) {
        walker = walker?.next || null;
      }
      freshNode.next = walker?.next || null;
      if (walker === this._tail) {
        this._tail = freshNode;
      }
      if (walker) {
        walker.next = freshNode;
      }
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
