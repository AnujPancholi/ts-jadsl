import LinkedList from "./LinkedList";

class Stack<T> {
  private _list: LinkedList<T>;

  constructor();
  constructor(initArray: T[]);
  constructor(initArray?: T[]) {
    if (initArray) {
      this._list = new LinkedList<T>(initArray);
    } else {
      this._list = new LinkedList<T>();
    }
  }

  size(): number {
    return this._list.length();
  }

  peek(): T | null {
    return this._list.get(0);
  }

  isEmpty(): boolean {
    return this._list.length() === 0;
  }

  push(value: T): Stack<T> {
    this._list.insertAt(0, value);
    return this;
  }
}

export default Stack;
