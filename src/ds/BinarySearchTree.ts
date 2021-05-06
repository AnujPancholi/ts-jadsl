import BinaryTree from "./BinaryTree";
import BinaryTreeNode from "./BinaryTreeNode";

class BinarySearchTree<T> extends BinaryTree<T> {
  private _getKey: (value: T) => number;

  constructor(keyFunction: (value: T) => number) {
    super();

    this._getKey = keyFunction;
  }

  private _insertValue(
    rootNode: BinaryTreeNode<T> | null,
    value: T
  ): BinaryTreeNode<T> | null {
    if (rootNode === null) {
      return new BinaryTreeNode<T>(value);
    }

    if (this._getKey(value) <= this._getKey(rootNode.value)) {
      rootNode.left = this._insertValue(rootNode.left, value);
    } else {
      rootNode.right = this._insertValue(rootNode.right, value);
    }

    return rootNode;
  }

  insert(value: T): BinarySearchTree<T> {
    this.root = this._insertValue(this.root, value);
    return this;
  }
}

export default BinarySearchTree;
