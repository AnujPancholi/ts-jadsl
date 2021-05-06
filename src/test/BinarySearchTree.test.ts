import BinarySearchTree from "../ds/BinarySearchTree";

describe("#BinarySearchTree - constructor", () => {
  test("should return empty tree", () => {
    const numTree = new BinarySearchTree<number>((n: number) => n);

    expect(numTree.root).toBeNull();
    expect(numTree.getPreorderTraversal()).toEqual([]);
  });
});

describe("#BinarySearchTree - insert", () => {
  test("should construct bst from inputs", () => {
    const numTree = new BinarySearchTree<number>((n: number) => n);
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTrav = [4, 2, 1, 3, 7, 5];

    for (const n of elements) {
      numTree.insert(n);
    }

    expect(numTree.getPreorderTraversal()).toEqual(preorderTrav);
  });
});
