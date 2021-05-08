## JADSL - Just Another Data Structures Library

### _(WIP)_

### Data Structures:

- [LinkedList](#LinkedList)
- [Stack](#Stack)
- [Queue](#Queue)
- [Heap](#Heap)
- [BinaryTreeNode](#BinaryTreeNode)
- [BinarySearchTree](#BinarySearchTree)

---

### <span id="LinkedList">Linked List:</span>:

Constructor:

```
LinkedList<T>(initArray?: T[])
```

Parameters:

- `initArray: T[]` (optional): Array of elements with which linked list will be initialized

##### Methods:

- `length(): number` Returns length of list.

- `insertAt(index: number, value: T): LinkedList<T>` Inserts `value`at `index` in the list, returns the list.

- `insertAtHead(value: T): LinkedList<T>` Inserts value at head, returns the list.

- `insertAtTail(value: T): LinkedList<T>` Inserts value at tail, returns the list.

- `get(index: number): T | null` Returns element at `index`. Returns `null` if index is out of bounds for the list.

- `deleteAt(index: number): T | null` Deletes element at `index`, returns the deleted element. Returns `null` if index is out of bounds and delete is not performed.

- `toArray(): T[]` Returns an array of elements of the list, in order.

- `getHeadNode(): ListNode<T> | null` Returns the head node of the list if the user does not wish to use the list functions, and just wants a reference to the list node. Returns `null` is list is empty.

---

### <span id="Stack">Stack:</span>:

Constructor:

```
Stack<T>(initArray?: T[])
```

Parameters:

- `initArray: T[]` (optional): Array of elements with which the stack will be initialized (insertion of each element performed in order)

##### Methods:

- `size(): number` Returns size of the stack (number of elements).

- `peek(): T | null` Returns top element of stack. Returns `null` if stack empty.

- `isEmpty(): boolean` Returns `true` if stack empty, `false` if otherwise.

- `push(value: T): Stack<T>` Pushes `value` on top of stack, returns the `Stack` instance.

- `pop(): T | null` Pops and returns top value from stack. Returns `null` if stack empty.

---

### <span id="#Queue">Queue:</span>

Single-ended queue.
Constructor:

```
Queue<T>(initArray?: T[])
```

Parameters:

- `initArray: T[]` (optional): Array of element from which the queue will be initialized (insertion of each element performed in order)

##### Methods:

- `enqueue(value: T): Queue<T>` Adds `value` to rear of queue, returns the `Queue` instance.

- `dequeue(): T | null` Removes and returns element at front of queue. Returns `null` if queue empty.

- `getFront(): T | null` Returns value in front of the queue. Returns `null` if queue empty.

- `isEmpty(): boolean` Returns `true` if queue empty, `false` if otherwise.

- `length(): number` Returns length of queue.

---

### <span id="Heap">Heap:</span>

Can also be considered implementation of a priority queue.
Constructor:

```
Heap<T>(comparatorFunction: (firstElement: T, secondElement: T) => number, initArray?: Array<T>)
```

Parameters:

- `comparatorFunction: (firstElement: T, secondElement: T) => number` (mandatory): A comparator function to return a number. If number is greater than 0, bubble-up will be performed in the heapify operation.
- `initArray: Array<T>` (optional): Array which will be heapified into initial heap.

##### Methods:

- `insert(value: T): Heap<T>` Inserts `value` in the heap.

- `pop(): T | null` Removes and returns value from top of heap. Returns `null` if heap empty.

- `peek(): T | null` Returns value at top of heap.

- `size(): number` Returns size of heap (number of elements)

---

### <span id="BinaryTreeNode">BinaryTreeNode:</span>

Constructor

```
BinaryTreeNode<T>(value: T)
```

Parameters:

- `value` (mandatory): Value for the binary tree node.

##### Properties:

- `value: T` value of node
- `left: BinaryTreeNode<T> | null` left of current node
- `right: BinaryTreeNode<T> | null` right of current node

##### Methods:

- `isLeafNode(): boolean` Returns `true` is node is leaf node, `false` if otherwise.

- `height(): number` Returns height of the subtree with current node as root.

- `getInorderTraversal(): Array<T>` Returns array of elements in subtree in an inorder fasion.

- `getPreorderTraversal(): Array<T>` Returns array of elements in subtree in a preorder fasion.

- `getPostorderTraversal(): Array<T>` Returns array of elements in subtree in a postorder fasion.

---

### <span id="BinarySearchTree">BinarySearchTree:</span>

Constructor

```
BinarySearchTree<T>(keyFunction: (value: T) => number, initArray?: Array<T>)
```

Parameters

- `keyFunction: (value: T) => number` (mandatory): Function that takes `value` of tree node as a parameter to get the key value, on the basis of which BST inserts/search will be performed

- `initArray: Array<T>` (optional): Array with which tree is initialized by inserting elements of array in order.

##### Properties:

- `root: BinaryTreeNode<T> | null` Root node of the binary tree

##### Methods:

- `insert(value: T): BinarySearchTree<T>` Inserts new node with `value` in BST, returns BST instance.

- `delete(value: T): BinarySearchTree<T>` Deletes node with `value` in BST, returns BST instance.

- `search(value: T): BinaryTreeNode<T> | null` Returns tree node with `value` in BST, `null` if node not found.

---

---
