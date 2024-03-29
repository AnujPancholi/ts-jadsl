import BinarySearchTree from "../src/ds/BinarySearchTree";

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

describe("#BinaryTree - height", () => {
  test("should return 0 if tree empty", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.height()).toBe(0);
  });

  test("should return height of tree", () => {
    const nums = [33, 0, 56, -73, 55.6, 777, 2, 34234, 1, 32, 3, 56];
    const numTree = new BinarySearchTree<number>((n) => n, nums);

    expect(numTree.height()).toBe(5);
  });
});

describe("#BinaryTree - invert", () => {
  test("should invert tree", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTravPostInvert = [4, 7, 5, 2, 3, 1];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    numTree.invert();

    expect(numTree.getPreorderTraversal()).toEqual(preorderTravPostInvert);
  });

  test("should do nothing for empty", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    numTree.invert();

    expect(numTree.root).toBeNull();
  });
});

describe("#BinaryTree - isBalanced", () => {
  test("should return true for enpty tree", () => {
    const binTree: BinarySearchTree<number> = new BinarySearchTree<number>(
      (n) => n
    );
    expect(binTree.isBalanced()).toBe(true);
  });

  test("should return true for balanced tree", () => {
    const binTree: BinarySearchTree<number> = new BinarySearchTree<number>(
      (n) => n,
      [5, 6, 2]
    );
    expect(binTree.isBalanced()).toBe(true);
  });

  test("should return false for unbalanced tree", () => {
    const binTree: BinarySearchTree<number> = new BinarySearchTree<number>(
      (n) => n,
      [5, 6, 4, 7, 3, 1, 2]
    );
    expect(binTree.isBalanced()).toBe(false);
  });
});
