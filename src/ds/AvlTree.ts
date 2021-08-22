import AvlTreeNode from "./AvlTreeNode";
import BinaryTree from "./BinaryTree";

class AvlTree<T> extends BinaryTree<T> {
  protected _getKey: (value: T) => number;

  constructor(keyFunction: (value: T) => number);
  constructor(keyFunction: (value: T) => number, initArray: T[]);
  constructor(keyFunction: (value: T) => number, initArray?: T[]) {
    super();
    this._getKey = keyFunction;

    if (initArray) {
      for (const value of initArray) {
        this.root = new AvlTreeNode<T>(value);
      }
    }
  }
}

export default AvlTree;
