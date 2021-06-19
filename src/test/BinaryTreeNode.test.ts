import { BinaryTreeNode, BinarySearchTree } from "../index";

describe("#BinaryTreeNode - constructor", () => {
  test("should construct single node", () => {
    const freshNode = new BinaryTreeNode<number>(5);

    expect(freshNode.value).toEqual(5);
    expect(freshNode.left).toBeNull();
    expect(freshNode.right).toBeNull();
  });
});

describe("#BinaryTreeNode - isLeafNode", () => {
  test("should return true for leaf node", () => {
    const freshNode = new BinaryTreeNode<number>(5);

    expect(freshNode.isLeafNode()).toBe(true);
  });

  test("should return false for non-leaf node", () => {
    const rootNode = new BinaryTreeNode<number>(5);
    rootNode.left = new BinaryTreeNode<number>(4);

    expect(rootNode.isLeafNode()).toBe(false);
  });
});

describe("#BinaryTreeNode - height", () => {
  test("should return 1 for leaf node", () => {
    const freshNode = new BinaryTreeNode<number>(5);

    expect(freshNode.height()).toBe(1);
  });

  test("should return height of subtree from node", () => {
    const freshNode = new BinaryTreeNode<number>(5);
    freshNode.left = new BinaryTreeNode<number>(3);
    freshNode.right = new BinaryTreeNode<number>(3);
    freshNode.left.left = new BinaryTreeNode<number>(2);

    expect(freshNode.height()).toBe(3);
  });
});

describe("#BinaryTreeNode - traversal functions", () => {
  const rootNode = new BinaryTreeNode<number>(1);
  rootNode.left = new BinaryTreeNode<number>(2);
  rootNode.right = new BinaryTreeNode<number>(3);
  rootNode.left.left = new BinaryTreeNode<number>(4);
  rootNode.left.right = new BinaryTreeNode<number>(5);

  test("should return inorder representation", () => {
    const expectdTraversal = [4, 2, 5, 1, 3];
    const inorderTrav = rootNode.getInorderTraversal();
    expect(inorderTrav).toEqual(expectdTraversal);
  });

  test("should return preorder representation", () => {
    const expectdTraversal = [1, 2, 4, 5, 3];
    const preorderTrav = rootNode.getPreorderTraversal();
    expect(preorderTrav).toEqual(expectdTraversal);
  });

  test("should return postorder representation", () => {
    const expectedTraversal = [4, 5, 2, 3, 1];
    const postorderTrav = rootNode.getPostorderTraversal();
    expect(postorderTrav).toEqual(expectedTraversal);
  });
});

describe("#BinaryTreeNode - invert", () => {
  test("should invert tree", () => {
    const elements = [4, 2, 7, 1, 3, 5];
    const preorderTravPostInvert = [4, 7, 5, 2, 3, 1];
    const numTree = new BinarySearchTree<number>((n) => n, elements);

    const rootNode = numTree.root;

    rootNode?.invert();

    expect(rootNode?.getPreorderTraversal()).toEqual(preorderTravPostInvert);
  });
});

describe("#BinaryTree - heightBalanceFactor", () => {
  const binTree: BinarySearchTree<number> = new BinarySearchTree<number>(
    (n) => n,
    [4, 2, 7, 1, 3, 5, 0.5, 1.2, 1.3, 8, 3.1]
  );

  test("should return 2", () => {
    const targetNode = binTree.root;

    expect(targetNode?.heightBalanceFactor()).toBe(2);
  });

  test("should return 1", () => {
    const targetNode = binTree.root?.left;

    expect(targetNode?.heightBalanceFactor()).toBe(1);
  });

  test("should return 0", () => {
    const targetNode = binTree.root?.right;

    expect(targetNode?.heightBalanceFactor()).toBe(0);
  });

  test("should return -1", () => {
    const targetNode = binTree.root?.left?.left;

    expect(targetNode?.heightBalanceFactor()).toBe(-1);
  });
});
