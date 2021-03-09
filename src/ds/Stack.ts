import LinkedList from "./LinkedList";

class Stack<T> extends LinkedList<T> {
  size(): number {
    return this._length;
  }

  peek(): T | null {
    return this._head !== null ? this._head.value : null;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  push(value: T): Stack<T> {
    this.insertAt(0, value);
    return this;
  }

  pop(): T | null {
    return this.deleteAt(0);
  }
}

export default Stack;
