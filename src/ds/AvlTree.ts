import BinaryTreeNode from "./BinaryTreeNode";
import BinarySearchTree from "./BinarySearchTree";

//WIP

class AvlTree<T> extends BinarySearchTree<T> {
  constructor(keyFunction: (value: T) => number);
  constructor(keyFunction: (value: T) => number, initArray: T[]);
  constructor(keyFunction: (value: T) => number, initArray?: T[]) {
    super(keyFunction);

    if (initArray) {
      for (const value of initArray) {
        this.root = this._insertValue(this.root, value);
      }
    }
  }

  protected _llRotation(treeNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (treeNode === null || treeNode.left === null) {
      throw new Error("CANNOT PERFORM LL ROTATION - NOT ENOUGH NODES");
    }

    const [nextParent, nextParentRightSubtree] = [
      treeNode.left,
      treeNode.left.right,
    ];
    nextParent.right = treeNode;
    treeNode.left = nextParentRightSubtree;
    treeNode.subtreeHeight =
      1 +
      Math.max(
        treeNode.left?.subtreeHeight || 0,
        treeNode.right?.subtreeHeight || 0
      );
    nextParent.subtreeHeight =
      1 +
      Math.max(
        nextParent.left?.subtreeHeight || 0,
        nextParent.right?.subtreeHeight || 0
      );
    return nextParent;
  }

  protected _rrRotation(treeNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (treeNode === null || treeNode.right === null) {
      throw new Error("CANNOT PERFORM RR ROTATION - NOT ENOUGH NODES");
    }

    const [nextParent, nextParentLeftSubtree] = [
      treeNode.right,
      treeNode.right.left,
    ];
    nextParent.left = treeNode;
    treeNode.right = nextParentLeftSubtree;
    treeNode.subtreeHeight =
      1 +
      Math.max(
        treeNode.left?.subtreeHeight || 0,
        treeNode.right?.subtreeHeight || 0
      );
    nextParent.subtreeHeight =
      1 +
      Math.max(
        nextParent.left?.subtreeHeight || 0,
        nextParent.right?.subtreeHeight || 0
      );
    return nextParent;
  }

  protected _lrRotation(treeNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (
      treeNode === null ||
      treeNode.left === null ||
      treeNode.left.right === null
    ) {
      throw new Error("CANNOT PERFORM LR ROTATION - NOT ENOUGH NODES");
    }

    treeNode.left = this._rrRotation(treeNode.left);
    return this._llRotation(treeNode);
  }

  protected _rlRotation(treeNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (
      treeNode == null ||
      treeNode.right === null ||
      treeNode.right.left === null
    ) {
      throw new Error("CANNOT PERFORM RL ROTATION - NOT ENOUGH NODES");
    }

    treeNode.right = this._llRotation(treeNode.right);
    return this._rrRotation(treeNode);
  }

  protected _insertValue(
    treeNode: BinaryTreeNode<T> | null,
    value: T
  ): BinaryTreeNode<T> {
    if (treeNode === null) {
      return new BinaryTreeNode<T>(value);
    }

    if (this._getKey(value) > this._getKey(treeNode.value)) {
      treeNode.right = this._insertValue(treeNode.right, value);
    } else {
      treeNode.left = this._insertValue(treeNode.left, value);
    }

    const rightSubtreeHeight = treeNode.right?.subtreeHeight || 0;
    const leftSubtreeHeight = treeNode.left?.subtreeHeight || 0;

    treeNode.subtreeHeight =
      1 + Math.max(leftSubtreeHeight, rightSubtreeHeight);
    const balanceFactor = leftSubtreeHeight - rightSubtreeHeight;

    if (balanceFactor === 2) {
      if (
        (treeNode.left?.left?.subtreeHeight || 0) -
          (treeNode.left?.right?.subtreeHeight || 0) >
        -1
      ) {
        treeNode = this._llRotation(treeNode);
      } else {
        treeNode = this._lrRotation(treeNode);
      }
    } else if (balanceFactor === -2) {
      if (
        (treeNode.right?.left?.subtreeHeight || 0) -
          (treeNode.right?.right?.subtreeHeight || 0) <
        1
      ) {
        treeNode = this._rrRotation(treeNode);
      } else {
        treeNode = this._rlRotation(treeNode);
      }
    }

    return treeNode;
  }
}

export default AvlTree;
