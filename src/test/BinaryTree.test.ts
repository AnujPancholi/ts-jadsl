import BinarySearchTree from "../ds/BinarySearchTree";
import BinaryTreeNode from "../ds/BinaryTreeNode";

describe("#BinaryTree - getPreorderTraversal", () => {
  test("should get empty array for empty tree", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.getPreorderTraversal()).toEqual([]);
  });

  test("should get preorder traversal", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTrav = [4, 2, 1, 3, 7, 5];
    const numTree = new BinarySearchTree<number>((n: number) => n, elements);

    expect(numTree.getPreorderTraversal()).toEqual(preorderTrav);
  });
});

describe("#BinaryTree - getPostorderTraversal", () => {
  test("should get empty array for empty tree", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.getPostorderTraversal()).toEqual([]);
  });

  test("should get postorder traversal", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const postorderTrav = [1, 3, 2, 5, 7, 4];
    const numTree = new BinarySearchTree<number>((n: number) => n, elements);

    expect(numTree.getPostorderTraversal()).toEqual(postorderTrav);
  });
});

describe("#BinaryTree - getInorderTraversal", () => {
  test("should get empty array for empty tree", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.getInorderTraversal()).toEqual([]);
  });

  test("should get inorder traversal", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const inorderTrav = [1, 2, 3, 4, 5, 7];
    const numTree = new BinarySearchTree<number>((n: number) => n, elements);

    expect(numTree.getInorderTraversal()).toEqual(inorderTrav);
  });
});
