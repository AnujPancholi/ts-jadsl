import BinarySearchTree from "../ds/BinarySearchTree";
import BinaryTreeNode from "../ds/BinaryTreeNode";

describe("#BinarySearchTree - constructor", () => {
  test("should return empty tree", () => {
    const numTree = new BinarySearchTree<number>((n: number) => n);

    expect(numTree.root).toBeNull();
    expect(numTree.getPreorderTraversal()).toEqual([]);
  });

  test("should construct bst from given array", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTrav = [4, 2, 1, 3, 7, 5];

    const numTree = new BinarySearchTree<number>((n) => n, elements);

    expect(numTree.getPreorderTraversal()).toEqual(preorderTrav);
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

  test("should delete node by value from BST with only left child", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTravPostDelete = [4, 2, 1, 3, 5];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    numTree.delete(7);

    expect(numTree.getPreorderTraversal()).toEqual(preorderTravPostDelete);
  });

  test("should delete node by value from BST with only right child", () => {
    const elements = [4, 2, 7, 1, 3, 5, 2.5];
    const preorderTravPostDelete = [4, 2, 1, 2.5, 7, 5];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    numTree.delete(3);
    expect(numTree.getPreorderTraversal()).toEqual(preorderTravPostDelete);
  });
});
