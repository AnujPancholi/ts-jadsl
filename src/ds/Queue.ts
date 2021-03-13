import ListNode from "./ListNode";
import LinkedList from "./LinkedList";

class Queue<T> {
  private _length: number;
  private _head: ListNode<T> | null;
  private _tail: ListNode<T> | null;

  constructor();
  constructor(initArray: T[]);
  constructor(initArray?: T[]) {
    this._head = null;
    this._tail = null;
    this._length = 0;

    if (initArray) {
      for (const value of initArray) {
        this.enqueue(value);
      }
    }
  }

  enqueue(value: T): Queue<T> {
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

  dequeue(): T | null {
    let dequeuedVal: T | null = null;

    if (this._head) {
      const dequeueNode = this._head;
      this._head = this._head.next;
      if (this._head === null) {
        this._tail = null;
      }
      dequeuedVal = dequeueNode.value;
      dequeueNode.next = null;
      --this._length;
    }

    return dequeuedVal;
  }

  getFront(): T | null {
    return this._head !== null ? this._head.value : null;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  length(): number {
    return this._length;
  }
}

export default Queue;
