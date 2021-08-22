import AvlTree from "../src/ds/AvlTree";

describe("#AvlTree - constructor", () => {
  test("should construct empty tree if only key function passed", () => {
    const numAvlTree = new AvlTree<number>((n: number) => n);

    expect(numAvlTree.root).toBeNull();
    expect(numAvlTree.getPreorderTraversal()).toEqual([]);
  });
});
