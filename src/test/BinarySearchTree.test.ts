import BinarySearchTree from "../ds/BinarySearchTree";

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

  test("should delete node by value from BST with both children", () => {
    const elements = [4, 2, 7, 1, 3, 5, 2.5, 3.5, 2.25];
    const preorderTravPostDelete = [4, 2.25, 1, 3, 2.5, 3.5, 7, 5];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    numTree.delete(2);
    expect(numTree.getPreorderTraversal()).toEqual(preorderTravPostDelete);
  });
});

describe("#BinarySearchTree - search", () => {
  test("should return null in case of empty tree", () => {
    expect(new BinarySearchTree<number>((n) => n).search(3)).toBeNull();
  });

  test("should return null if value not present", () => {
    const elements = [4, 2, 7, 1, 3, 5, 2.5];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    expect(numTree.search(56)).toBeNull();
  });

  test("should return node if value present", () => {
    const elements = [4, 2, 7, 1, 3, 5, 2.5];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    const searchResult1 = numTree.search(7);
    const searchResult2 = numTree.search(4);
    const searchResult3 = numTree.search(2.5);
    expect(searchResult1 ? searchResult1.value : null).toBe(7);
    expect(searchResult2 ? searchResult2.value : null).toBe(4);
    expect(searchResult3 ? searchResult3.value : null).toBe(2.5);
  });
});

describe("#BinarySearchTree - getMin", () => {
  test("should return null if tree empty", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.getMin()).toBeNull();
  });

  test("should return root node if no left subtree present", () => {
    const numTree = new BinarySearchTree<number>((n) => n);
    const val = 33;
    numTree.insert(val);

    expect(numTree.getMin()).toBe(val);
  });

  test("should return min value", () => {
    const nums = [33, 0, 56, -73, 55.6, 777, 2, 34234, 1, 32, 3, 56];
    const minValue = Math.min(...nums);
    const numTree = new BinarySearchTree<number>((n) => n, nums);

    expect(numTree.getMin()).toBe(minValue);
  });
});

describe("#BinarySearchTree - getMax", () => {
  test("should return null if tree empty", () => {
    const numTree = new BinarySearchTree<number>((n) => n);

    expect(numTree.getMax()).toBeNull();
  });

  test("should return root node if no right subtree present", () => {
    const numTree = new BinarySearchTree<number>((n) => n);
    const val = 33;
    numTree.insert(val);

    expect(numTree.getMax()).toBe(val);
  });

  test("should return max value", () => {
    const nums = [33, 0, 56, -73, 55.6, 777, 2, 34234, 1, 32, 3, 56];
    const maxValue = Math.max(...nums);
    const numTree = new BinarySearchTree<number>((n) => n, nums);

    expect(numTree.getMax()).toBe(maxValue);
  });
});
