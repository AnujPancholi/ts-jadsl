import BinarySearchTree from "../ds/BinarySearchTree";

describe("#BinarySearchTree - constructor", () => {
  test("should return empty tree", () => {
    const numTree = new BinarySearchTree<number>((n: number) => n);

    expect(numTree.root).toBeNull();
  });
});
