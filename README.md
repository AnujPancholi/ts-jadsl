<div align=center><h1>JADSL - Just Another Data Structures Library</h1></div>

<div align=center>

[![CircleCI](https://circleci.com/gh/AnujPancholi/ts-jadsl/tree/master.svg?style=shield)](https://circleci.com/gh/AnujPancholi/ts-jadsl/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/AnujPancholi/ts-jadsl/badge.svg?branch=master)](https://coveralls.io/github/AnujPancholi/ts-jadsl?branch=master)

</div>

### _(WIP)_

### Data Structures:

- [ListNode](#ListNode)
- [LinkedList](#LinkedList)
- [Stack](#Stack)
- [Queue](#Queue)
- [Heap](#Heap)
- [BinaryTreeNode](#BinaryTreeNode)
- [BinaryTree](#BinaryTree) (_Abstract_)
- [BinarySearchTree](#BinarySearchTree)
- [AvlTree](#AvlTree)

---

### <span id="ListNode">ListNode:</span>

A node of a singly-linked list.

##### Constructor:

```
ListNode<T>(value: T)
```

##### Properties

- `value: T` Value held by node.
- `next: ListNode<T> | null` Next pointer of node.

##### Parameters:

- `value: T` (mandatory): value held by list node.

### <span id="LinkedList">LinkedList:</span>

A simple, singly-linked list.

##### Constructor:

```
LinkedList<T>(initArray?: T[])
```

##### Parameters:

- `initArray: T[]` (optional): Array of elements with which linked list will be initialized, inserted in order

##### Methods:

- `length(): number` Returns length of list.

- `insertAt(index: number, value: T): LinkedList<T>` Inserts `value`at `index` in the list, returns the list.

- `insertAtHead(value: T): LinkedList<T>` Inserts value at head, returns the list.

- `insertAtTail(value: T): LinkedList<T>` Inserts value at tail, returns the list.

- `get(index: number): T | null` Returns element at `index`. Returns `null` if index is out of bounds for the list.

- `deleteAt(index: number): T | null` Deletes element at `index`, returns the deleted element. Returns `null` if index is out of bounds and delete is not performed.

- `toArray(): T[]` Returns an array of elements of the list, in order.

- `getHeadNode(): ListNode<T> | null` Returns the head node of the list, returns `null` if list is empty. **NOTE:** Should be used ONLY if the user does not wish to use the list functions, and just wants a reference to the head node of the list.

---

### <span id="Stack">Stack:</span>

##### Constructor:

```
Stack<T>(initArray?: T[])
```

##### Parameters:

- `initArray: T[]` (optional): Array of elements with which the stack will be initialized (insertion of each element performed in **reverse order**, i.e, first element of array will be top of stack)

##### Methods:

- `size(): number` Returns size of the stack (number of elements).

- `peek(): T | null` Returns top element of stack. Returns `null` if stack empty.

- `isEmpty(): boolean` Returns `true` if stack empty, `false` if otherwise.

- `push(value: T): Stack<T>` Pushes `value` on top of stack, returns the `Stack` instance.

- `pop(): T | null` Pops and returns top value from stack. Returns `null` if stack empty.

---

### <span id="#Queue">Queue:</span>

A simple, single-ended queue.

##### Constructor:

```
Queue<T>(initArray?: T[])
```

##### Parameters:

- `initArray: T[]` (optional): Array of element from which the queue will be initialized (insertion of each element performed in order)

##### Methods:

- `enqueue(value: T): Queue<T>` Adds `value` to rear of queue, returns the `Queue` instance.

- `dequeue(): T | null` Removes and returns element at front of queue. Returns `null` if queue empty.

- `getFront(): T | null` Returns value in front of the queue. Returns `null` if queue empty.

- `isEmpty(): boolean` Returns `true` if queue empty, `false` if otherwise.

- `length(): number` Returns length of queue.

---

### <span id="Heap">Heap:</span>

A binary heap with internally implemented with an array.
Can also be considered implementation of a priority queue.

##### Constructor:

```
Heap<T>(comparatorFunction: (firstElement: T, secondElement: T) => number, initArray?: Array<T>)
```

##### Parameters:

- `comparatorFunction: (firstElement: T, secondElement: T) => number` (mandatory): A comparator function to return a number. If number is greater than 0, bubble-up will be performed in the heapify operation.
- `initArray: Array<T>` (optional): Array which will be heapified into initial heap.

##### Methods:

- `insert(value: T): Heap<T>` Inserts `value` in the heap.

- `extract(): T | null` Removes and returns value from root of heap (highest priority). Returns `null` if heap empty.

- `peek(): T | null` Returns value at root of heap.

- `size(): number` Returns size of heap (number of elements)

---

### <span id="BinaryTreeNode">BinaryTreeNode:</span>

##### Constructor

```
BinaryTreeNode<T>(value: T)
```

##### Parameters:

- `value` (mandatory): Value for the binary tree node.

##### Properties:

- `value: T` value of node
- `left: BinaryTreeNode<T> | null` left of current node
- `right: BinaryTreeNode<T> | null` right of current node

##### Methods:

- `isLeafNode(): boolean` Returns `true` is node is leaf node, `false` if otherwise.

- `height(): number` Returns height of the subtree with current node as root.

- `getInorderTraversal(): Array<T>` Returns array of elements in subtree rooted at node in an inorder fasion.

- `getPreorderTraversal(): Array<T>` Returns array of elements in subtree rooted at node in a preorder fasion.

- `getPostorderTraversal(): Array<T>` Returns array of elements in subtree rooted at node in a postorder fasion.

- `invert(): BinaryTreeNode<T> | null` Inverts subtree with node as root, returns the node.

- `isBalanced(): boolean` Returns `true` if subtree rooted at node is height balanced, `false` if otherwise.

- `isBinarySearchTree(keyFunction: (value: T) => number)` Returns `true` if subtree rooted at node is a valid binary search tree, needs a `keyFunction` to get numeric value from data stored in node (see [`BinarySearchTree`](#BinarySearchTree))

---

### <span id="BinaryTree">BinaryTree:</span>

Abstract class - therefore, no constructor definition.

##### Properties:

- `root: BinaryTreeNode<T> | null` Root node of the binary tree.

##### Methods:

- `getInorderTraversal(): Array<T>` Returns array of elements in tree in an inorder fasion from root of tree.

- `getPreorderTraversal(): Array<T>` Returns array of elements in tree in a preorder fasion from root of tree.

- `getPostorderTraversal(): Array<T>` Returns array of elements in tree in a postorder fasion from root of tree.

- `height(): number` Returns height of the tree.

- `invert(): BinaryTree<T>` Inverts the BinaryTree, returns the tree.

- `isBalanced(): boolean` Returns `true` if binary tree is height balanced, `false` if otherwise.

---

### <span id="BinarySearchTree">BinarySearchTree:</span>

Derived class: Derived from [`BinaryTree`](#BinaryTree).

##### Constructor

```
BinarySearchTree<T>(keyFunction: (value: T) => number, initArray?: Array<T>)
```

##### Parameters

- `keyFunction: (value: T) => number` (mandatory): Function that takes `value` of tree node as a parameter to get the key value, on the basis of which BST inserts/search will be performed

- `initArray: Array<T>` (optional): Array with which tree is initialized by inserting elements of array in order.

##### Properties:

- `root: BinaryTreeNode<T> | null` Root node of the binary tree

##### Methods:

- `insert(value: T): BinarySearchTree<T>` Inserts new node with `value` in BST, returns BST instance.

- `delete(value: T): BinarySearchTree<T>` Deletes node with `value` in BST, returns BST instance.

- `search(value: T): BinaryTreeNode<T> | null` Returns tree node with `value` in BST, `null` if node not found.

- `getMin(): T | null` Returns value in tree with min key, `null` if tree empty.

- `getMax(): T | null` Returns value in tree with max key, `null` if tree empty.

---

### <span id="AvlTree">AvlTree:</span>

Derived class: Derived from [`BinarySearchTree`](#BinarySearchTree).

##### Constructor

```
AvlTree<T>(keyFunction: (value: T) => number, initArray?: Array<T>)
```

##### Parameters

- `keyFunction: (value: T) => number` (mandatory): Function that takes `value` of tree node as a parameter to get the key value, on the basis of which BST inserts/search will be performed

- `initArray: Array<T>` (optional): Array with which tree is initialized by inserting elements of array in order.

##### Properties:

- `root: BinaryTreeNode<T> | null` Root node of the binary tree - (**NOTE**: Access this property ONLY if you do not wish to use the methods of the class, and want to write your own functions)

##### Methods:

- `insert(value: T): AvlTree<T>` Inserts new node with `value` in BST, returns AvlTree instance.

- `delete(value: T): AvlTree<T>` Deletes node with `value` in BST, returns AvlTree instance.

- `search(value: T): BinaryTreeNode<T> | null` Returns tree node with `value` in BST, `null` if node not found.

- `getMin(): T | null` Returns value in tree with min key, `null` if tree empty.

- `getMax(): T | null` Returns value in tree with max key, `null` if tree empty.

---

---
