import BinaryTreeNode from "./BinaryTreeNode";

abstract class BinaryTree<T> {
  root: BinaryTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  getInorderTraversal(): Array<T> {
    return this.root === null ? [] : this.root.getInorderTraversal();
  }

  getPreorderTraversal(): Array<T> {
    return this.root === null ? [] : this.root.getInorderTraversal();
  }

  getPostorderTraversal(): Array<T> {
    return this.root === null ? [] : this.root.getPostorderTraversal();
  }
}

export default BinaryTree;
