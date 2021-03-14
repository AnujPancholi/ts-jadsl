class Heap<T> {
  private _array: T[];
  private _comparatorFunction: (firstElement: T, secondElement: T) => number;

  private _getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private _getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private _getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  constructor(
    comparatorFunction: (firstElement: T, secondElement: T) => number
  ) {
    this._array = [];
    this._comparatorFunction = comparatorFunction;
  }

  peek(): T | null {
    return this._array.length > 0 ? this._array[0] : null;
  }

  size(): number {
    return this._array.length;
  }
}

export default Heap;
