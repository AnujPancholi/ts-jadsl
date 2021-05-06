import BinaryTree from "./BinaryTree";
import BinaryTreeNode from "./BinaryTreeNode";

class BinarySearchTree<T> extends BinaryTree<T> {
  private _getKey: (value: T) => number;

  constructor(keyFunction: (value: T) => number);
  constructor(keyFunction: (value: T) => number, initArray: Array<T>);
  constructor(keyFunction: (value: T) => number, initArray?: Array<T>) {
    super();
    this._getKey = keyFunction;

    if (initArray) {
      for (const value of initArray) {
        this.root = this._insertValue(this.root, value);
      }
    }
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

  private _getMinNode(
    rootNode: BinaryTreeNode<T> | null
  ): BinaryTreeNode<T> | null {
    if (rootNode) {
      if (rootNode.left === null) {
        return rootNode;
      }
      return this._getMinNode(rootNode.left);
    }
    return null;
  }

  private _deleteValue(
    rootNode: BinaryTreeNode<T> | null,
    value: T
  ): BinaryTreeNode<T> | null {
    if (rootNode === null) {
      return null;
    } else if (this._getKey(value) < this._getKey(rootNode.value)) {
      rootNode.left = this._deleteValue(rootNode.left, value);
    } else if (this._getKey(value) > this._getKey(rootNode.value)) {
      rootNode.right = this._deleteValue(rootNode.right, value);
    } else {
      if (rootNode.isLeafNode()) {
        return null;
      } else if (rootNode.left === null && rootNode.right) {
        return rootNode.right;
      } else if (rootNode.left && rootNode.right === null) {
        return rootNode.left;
      } else {
        const minNodeOfRightSubtree = this._getMinNode(rootNode.right);

        const freshNode = minNodeOfRightSubtree
          ? new BinaryTreeNode<T>(minNodeOfRightSubtree.value)
          : null;
        if (freshNode) {
          freshNode.left = rootNode.left;
          freshNode.right = rootNode.right;

          return freshNode;
        }
      }
    }

    return rootNode;
  }

  insert(value: T): BinarySearchTree<T> {
    this.root = this._insertValue(this.root, value);
    return this;
  }

  delete(value: T): BinarySearchTree<T> {
    this.root = this._deleteValue(this.root, value);
    return this;
  }
}

export default BinarySearchTree;
