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
    return this.root === null ? [] : this.root.getPreorderTraversal();
  }

  getPostorderTraversal(): Array<T> {
    return this.root === null ? [] : this.root.getPostorderTraversal();
  }

  height(): number {
    return this.root === null ? 0 : this.root.height();
  }
}

export default BinaryTree;
