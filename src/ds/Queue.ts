import LinkedList from "./LinkedList";

class Queue<T> extends LinkedList<T> {
  enqueue(value: T): Queue<T> {
    this.insertAtTail(value);
    return this;
  }

  getFront(): T | null {
    const headRef = this.getHeadNode();
    return headRef !== null ? headRef.value : null;
  }
}

export default Queue;
