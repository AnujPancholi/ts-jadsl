import BinaryTreeNode from "./BinaryTreeNode";

class AvlTreeNode<T> extends BinaryTreeNode<T> {
  subtreeHeight: number;

  constructor(value: T) {
    super(value);
    this.subtreeHeight = -1;
  }
}

export default AvlTreeNode;
