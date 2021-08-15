import AvlTreeNode from "../ds/AvlTreeNode";

describe("#AvlTreeNode - constructor", () => {
  test("should construct empty node", () => {
    const freshNode: AvlTreeNode<number> = new AvlTreeNode<number>(5);

    expect(freshNode.value).toBe(5);
    expect(freshNode.right).toBeNull();
    expect(freshNode.left).toBeNull();
    expect(freshNode.subtreeHeight).toBe(-1);
    expect(freshNode.getPreorderTraversal()).toEqual([5]);
  });
});
