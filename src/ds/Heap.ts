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

  private _heapifyUp(): void {
    let currIndex = this._array.length - 1;

    while (
      currIndex > 0 &&
      this._comparatorFunction(
        this._array[this._getParentIndex(currIndex)],
        this._array[currIndex]
      ) > 0
    ) {
      const temp = this._array[this._getParentIndex(currIndex)];
      this._array[this._getParentIndex(currIndex)] = this._array[currIndex];
      this._array[currIndex] = temp;
      currIndex = this._getParentIndex(currIndex);
    }
  }

  constructor(
    comparatorFunction: (firstElement: T, secondElement: T) => number
  ) {
    this._array = [];
    this._comparatorFunction = comparatorFunction;
  }

  insert(value: T): Heap<T> {
    this._array.push(value);
    this._heapifyUp();
    return this;
  }

  peek(): T | null {
    return this._array.length > 0 ? this._array[0] : null;
  }

  size(): number {
    return this._array.length;
  }
}

export default Heap;
