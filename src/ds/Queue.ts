import LinkedList from "./LinkedList";

class Queue<T> extends LinkedList<T> {
  enqueue(value: T): Queue<T> {
    this.insertAtTail(value);
    return this;
  }

  dequeue(): T | null {
    return this.deleteAt(0);
  }

  getFront(): T | null {
    const headRef = this.getHeadNode();
    return headRef !== null ? headRef.value : null;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }
}

export default Queue;
