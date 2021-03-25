import { BinaryTreeNode } from "../index";

describe("#BinaryTreeNode - constructor", () => {
  test("should construct single node", () => {
    const freshNode = new BinaryTreeNode<number>(5);

    expect(freshNode.value).toEqual(5);
    expect(freshNode.left).toBeNull();
    expect(freshNode.right).toBeNull();
  });
});

describe("#BinaryTreeNode - isLeafNode", () => {
  test("should return true for leaf node", () => {
    const freshNode = new BinaryTreeNode<number>(5);

    expect(freshNode.isLeafNode()).toBe(true);
  });

  test("should return false for non-leaf node", () => {
    const rootNode = new BinaryTreeNode<number>(5);
    rootNode.left = new BinaryTreeNode<number>(4);

    expect(rootNode.isLeafNode()).toBe(false);
  });
});
