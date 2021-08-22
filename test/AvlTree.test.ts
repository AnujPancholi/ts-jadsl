import AvlTree from "../src/ds/AvlTree";
import BinaryTreeNode from "../src/ds/BinaryTreeNode";

describe("#AvlTree - constructor", () => {
  function assertBalancedBst<T>(
    treeNode: BinaryTreeNode<T> | null,
    keyFunction: (value: T) => number
  ) {
    expect(treeNode).not.toBeNull();
    expect(treeNode?.isBalanced()).toBe(true);
    expect(treeNode?.isBinarySearchTree(keyFunction)).toBe(true);
  }

  test("should construct empty tree if only key function passed", () => {
    const numAvlTree = new AvlTree<number>((n: number) => n);

    expect(numAvlTree.root).toBeNull();
    expect(numAvlTree.getPreorderTraversal()).toEqual([]);
  });

  test("should construct balanced BST when initArray passed", () => {
    interface InsertionTestCase {
      input: number[];
      expectedRootValue: number;
      expectedPostorder: number[];
    }
    const cases: Array<InsertionTestCase> = [
      {
        input: [1, 2, 3, 4, 5, 6],
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [5, 4, 3, 2, 1],
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 5, 4],
      },
      {
        input: [20, 15, 17],
        expectedRootValue: 17,
        expectedPostorder: [15, 20, 17],
      },
      {
        input: [20, 25, 22],
        expectedRootValue: 22,
        expectedPostorder: [20, 25, 22],
      },
    ];

    for (let i = 0; i < cases.length; ++i) {
      const testCase: InsertionTestCase = cases[i];
      const numAvlTree = new AvlTree<number>((n: number) => n, testCase.input);

      expect(numAvlTree.root?.value).toBe(testCase.expectedRootValue);
      assertBalancedBst<number>(numAvlTree.root, (n: number) => n);
      expect(numAvlTree.getPostorderTraversal()).toEqual(
        testCase.expectedPostorder
      );
    }
  });
});
