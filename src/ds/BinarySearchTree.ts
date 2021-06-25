import BinaryTree from "./BinaryTree";
import BinaryTreeNode from "./BinaryTreeNode";

class BinarySearchTree<T> extends BinaryTree<T> {
  protected _getKey: (value: T) => number;

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

  protected _insertValue(
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

  protected _getMinNode(rootNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
    // if (rootNode) {
    if (rootNode.left === null) {
      return rootNode;
    }
    return this._getMinNode(rootNode.left);
    // }
    // return null;
  }

  protected _getMaxNode(
    rootNode: BinaryTreeNode<T> | null
  ): BinaryTreeNode<T> | null {
    if (rootNode === null) {
      return null;
    }

    if (rootNode.right === null) {
      return rootNode;
    }

    return this._getMaxNode(rootNode.right);
  }

  protected _deleteValue(
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
      if (rootNode.left === null) {
        return rootNode.right;
      } else if (rootNode.right === null) {
        return rootNode.left;
      } else {
        const minNodeOfRightSubtree = this._getMinNode(rootNode.right);

        const freshNode = new BinaryTreeNode<T>(minNodeOfRightSubtree.value);
        // if (freshNode) {
        freshNode.left = rootNode.left;
        freshNode.right = this._deleteValue(rootNode.right, freshNode.value);

        return freshNode;
        // }
      }
    }

    return rootNode;
  }

  protected _searchValue(
    rootNode: BinaryTreeNode<T> | null,
    value: T
  ): BinaryTreeNode<T> | null {
    if (rootNode === null) {
      return null;
    }

    if (rootNode.value === value) {
      return rootNode;
    }

    return this._getKey(value) <= this._getKey(rootNode.value)
      ? this._searchValue(rootNode.left, value)
      : this._searchValue(rootNode.right, value);
  }

  insert(value: T): BinarySearchTree<T> {
    this.root = this._insertValue(this.root, value);
    return this;
  }

  delete(value: T): BinarySearchTree<T> {
    this.root = this._deleteValue(this.root, value);
    return this;
  }

  search(value: T): BinaryTreeNode<T> | null {
    return this._searchValue(this.root, value);
  }

  getMin(): T | null {
    return this.root === null ? null : this._getMinNode(this.root).value;
  }

  getMax(): T | null {
    const maxNode = this._getMaxNode(this.root);
    return maxNode === null ? null : maxNode.value;
  }
}

export default BinarySearchTree;
