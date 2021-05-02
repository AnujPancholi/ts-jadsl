class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
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
}

export default BinaryTreeNode;
