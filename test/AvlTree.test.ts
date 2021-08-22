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
  val: number;
}

interface SearchTestCase {
  input: number[];
  searchValue: number;
  resultValue: number | null;
  searchResultNodeChildValues: Array<number | null>;
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
        val: 0,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [5, 4, 3, 2, 1],
        val: 0,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 5, 4],
      },
      {
        input: [20, 15, 17],
        val: 0,
        expectedRootValue: 17,
        expectedPostorder: [15, 20, 17],
      },
      {
        input: [20, 25, 22],
        val: 0,
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
        val: 6,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [5, 4, 3, 2, 1],
        val: 6,
        expectedRootValue: 4,
        expectedPostorder: [1, 3, 2, 6, 5, 4],
      },
      {
        input: [20, 15, 17, 10, 16.5],
        val: 16.1,
        expectedRootValue: 16.5,
        expectedPostorder: [10, 16.1, 15, 20, 17, 16.5],
      },
      {
        input: [20, 15, 17, 10, 16.5, 45],
        val: 30,
        expectedRootValue: 17,
        expectedPostorder: [10, 16.5, 15, 20, 45, 30, 17],
      },
    ];

    for (let i = 0; i < testCases.length; ++i) {
      const testCase: InsertionTestCase = testCases[i];
      const numAvlTree = new AvlTree<number>((n: number) => n, testCase.input);
      numAvlTree.insert(testCase.val);

      expect(numAvlTree.root?.value).toBe(testCase.expectedRootValue);
      assertBalancedBst<number>(numAvlTree.root, (n: number) => n);
      expect(numAvlTree.getPostorderTraversal()).toEqual(
        testCase.expectedPostorder
      );
    }
  });
});

describe("#AvlTree - search", () => {
  test("should search values in AVL tree", () => {
    const testCases: Array<SearchTestCase> = [
      {
        input: [1, 2, 3, 4, 5],
        searchValue: 4,
        resultValue: 4,
        searchResultNodeChildValues: [3, 5],
      },
      {
        input: [1, 2, 3, 4, 5],
        searchValue: 8,
        resultValue: null,
        searchResultNodeChildValues: [null, null],
      },
      {
        input: [1, 2, 3, 4, 5, 0.5],
        searchValue: 1,
        resultValue: 1,
        searchResultNodeChildValues: [0.5, null],
      },
      {
        input: [1, 2, 3, 4, 5, 0.5, 10, 8],
        searchValue: 10,
        resultValue: 10,
        searchResultNodeChildValues: [null, null],
      },
      {
        input: [1, 2, 3, 4, 5, 0.5, 10, 8],
        searchValue: 0.5,
        resultValue: 0.5,
        searchResultNodeChildValues: [null, null],
      },
    ];

    for (let i = 0; i < testCases.length; ++i) {
      const testCase: SearchTestCase = testCases[i];
      const numAvlTree = new AvlTree<number>((n: number) => n, testCase.input);

      const searchedNode = numAvlTree.search(testCase.searchValue);

      expect((searchedNode?.value || null) === testCase.resultValue).toBe(true);
      assertBalancedBst<number>(numAvlTree.root, (n: number) => n);
      expect(searchedNode?.left?.value || null).toBe(
        testCase.searchResultNodeChildValues[0]
      );
      expect(searchedNode?.right?.value || null).toBe(
        testCase.searchResultNodeChildValues[1]
      );
    }
  });
});
