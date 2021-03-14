class Heap<T> {
  private _array: T[];
  private _comparatorFunction: (firstElement: T, secondElement: T) => number;

  constructor(
    comparatorFunction: (firstElement: T, secondElement: T) => number
  ) {
    this._array = [];
    this._comparatorFunction = comparatorFunction;
  }

  peek(): T | null {
    return this._array.length > 0 ? this._array[0] : null;
  }
}

export default Heap;
