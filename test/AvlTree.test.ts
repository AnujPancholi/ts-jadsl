import AvlTree from "../src/ds/AvlTree";
import BinaryTreeNode from "../src/ds/BinaryTreeNode";

function assertBalancedBst<T>(
  treeNode: BinaryTreeNode<T> | null,
  keyFunction: (value: T) => number
) {
  expect(treeNode).not.toBeNull();
  expect(treeNode?.isBalanced()).toBe(true);
  expect(treeNode?.isBinarySearchTree(keyFunction)).toBe(true);
}

interface InsertionTestCase {
  input: number[];
  expectedRootValue: number;
  expectedPostorder: number[];
  valueToInsert: number;
}

describe("#AvlTree - constructor", () => {
  test("should construct empty tree if only key function passed", () => {
    const numAvlTree = new AvlTree<number>((n: number) => n);

    expect(numAvlTree.root).toBeNull();
    expect(numAvlTree.getPreorderTraversal()).toEqual([]);
  });

  test("should construct balanced BST when initArray passed", () => {
    const testCases: Array<InsertionTestCase> = [
      {
        input: [1, 2, 3, 4, 5, 6],
        valueToInsert: 0,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [5, 4, 3, 2, 1],
        valueToInsert: 0,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 5, 4],
      },
      {
        input: [20, 15, 17],
        valueToInsert: 0,
        expectedRootValue: 17,
        expectedPostorder: [15, 20, 17],
      },
      {
        input: [20, 25, 22],
        valueToInsert: 0,
        expectedRootValue: 22,
        expectedPostorder: [20, 25, 22],
      },
    ];

    for (let i = 0; i < testCases.length; ++i) {
      const testCase: InsertionTestCase = testCases[i];
      const numAvlTree = new AvlTree<number>((n: number) => n, testCase.input);

      expect(numAvlTree.root?.value).toBe(testCase.expectedRootValue);
      assertBalancedBst<number>(numAvlTree.root, (n: number) => n);
      expect(numAvlTree.getPostorderTraversal()).toEqual(
        testCase.expectedPostorder
      );
    }
  });
});

describe("#AvlTree - insert", () => {
  test("should insert nodes in AVL tree", () => {
    const testCases: Array<InsertionTestCase> = [
      {
        input: [1, 2, 3, 4, 5],
        valueToInsert: 6,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [5, 4, 3, 2, 1],
        valueToInsert: 6,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [20, 15, 17, 10, 16.5],
        valueToInsert: 16.1,
        expectedRootValue: 16.5,
        expectedPostorder: [10, 16.1, 15, 20, 17, 16.5],
      },
      {
        input: [20, 15, 17, 10, 16.5, 45],
        valueToInsert: 30,
        expectedRootValue: 17,
        expectedPostorder: [10, 16.5, 15, 20, 45, 30, 17],
      },
    ];

    for (let i = 0; i < testCases.length; ++i) {
      const testCase: InsertionTestCase = testCases[i];
      const numAvlTree = new AvlTree<number>((n: number) => n, testCase.input);
      numAvlTree.insert(testCase.valueToInsert);

      expect(numAvlTree.root?.value).toBe(testCase.expectedRootValue);
      assertBalancedBst<number>(numAvlTree.root, (n: number) => n);
      expect(numAvlTree.getPostorderTraversal()).toEqual(
        testCase.expectedPostorder
      );
    }
  });
});
