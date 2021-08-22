import BinaryTreeNode from "./BinaryTreeNode";
import BinaryTree from "./BinaryTree";

//WIP

class AvlTree<T> extends BinaryTree<T> {
  protected _getKey: (value: T) => number;

  constructor(keyFunction: (value: T) => number);
  constructor(keyFunction: (value: T) => number, initArray: T[]);
  constructor(keyFunction: (value: T) => number, initArray?: T[]) {
    super();
    this._getKey = keyFunction;
  }
}

export default AvlTree;
