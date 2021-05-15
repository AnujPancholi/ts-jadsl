class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  private _invertSubtree(
    rootNode: BinaryTreeNode<T> | null
  ): BinaryTreeNode<T> | null {
    if (rootNode === null) {
      return null;
    }
    const temp = rootNode.right;
    rootNode.right = this._invertSubtree(rootNode.left);
    rootNode.left = this._invertSubtree(temp);
    return rootNode;
  }

  isLeafNode(): boolean {
    return this.left === null && this.right === null;
  }

  height(): number {
    return (
      1 +
      Math.max(
        this.left ? this.left.height() : 0,
        this.right ? this.right.height() : 0
      )
    );
  }

  getInorderTraversal(): Array<T> {
    const inorderTrav: Array<T> = [];

    const populateInorderTraversalRecursive = function (
      node: BinaryTreeNode<T> | null,
      trav: Array<T>
    ): void {
      if (node === null) {
        return;
      }
      populateInorderTraversalRecursive(node.left, trav);
      trav.push(node.value);
      populateInorderTraversalRecursive(node.right, trav);
    };

    populateInorderTraversalRecursive(this, inorderTrav);

    return inorderTrav;
  }

  getPreorderTraversal(): Array<T> {
    const preorderTrav: Array<T> = [];

    const populatePreorderTraversalRecursive = function (
      root: BinaryTreeNode<T> | null,
      trav: Array<T>
    ): void {
      if (root === null) {
        return;
      }

      trav.push(root.value);
      populatePreorderTraversalRecursive(root.left, trav);
      populatePreorderTraversalRecursive(root.right, trav);
    };

    populatePreorderTraversalRecursive(this, preorderTrav);
    return preorderTrav;
  }

  getPostorderTraversal(): Array<T> {
    const postorderTrav: Array<T> = [];

    const populatePostorderTraversalRecursive = function (
      root: BinaryTreeNode<T> | null,
      trav: Array<T>
    ): void {
      if (root === null) {
        return;
      }

      populatePostorderTraversalRecursive(root.left, trav);
      populatePostorderTraversalRecursive(root.right, trav);
      trav.push(root.value);
    };

    populatePostorderTraversalRecursive(this, postorderTrav);

    return postorderTrav;
  }

  invert(): BinaryTreeNode<T> | null {
    return this._invertSubtree(this);
  }
}

export default BinaryTreeNode;
