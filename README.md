## JADSL - Just Another Data Structures Library

### _(WIP)_

### Data Structures:

- LinkedList
- Stack
- Queue
- Heap

### Linked List:

Constructor:
`LinkedList(initArray?: T[])`

Parameters:

- `initArray: T[]` (optional): Array of elements with which linked list will be initialized

##### Methods:

- `length(): number` Returns length of list.

- `insertAt(index: number, value: T): LinkedList<T>` Inserts `value`at `index` in the list, returns the list.

- `insertAtHead(value: T): LinkedList<T>` Inserts value at head, returns the list.

- `insertAtTail(value: T): LinkedList<T>` Inserts value at tail, returns the list.

- `get(index: number): T | null` Returns element at `index`. Returns `null` if index is out of bounds for the list.

- `deleteAt(index: number): T | null`: Deletes element at `index`, returns the deleted element. Returns `null` if index is out of bounds and delete is not performed.

- `toArray(): T[]` Returns an array of elements of the list, in order.

- `getHeadNode(): ListNode<T> | null` Returns the head node of the list if the user does not wish to use the list functions, and just wants a reference to the list node. Returns `null` is list is empty.

### Stack:

Constructor:
`constructor(initArray?: T[])`

Parameters:

- `initArray: T[]` (optional): Array of elements with which the stack will be initialized (insertion of each element performed in order)

##### Methods:

- `size(): number` Returns size of the stack (number of elements).

- `peek(): T | null` Returns top element of stack. Returns `null` if stack empty.

- `isEmpty(): boolean` Returns `true` if stack empty, `false` if otherwise.

- `push(value: T): Stack<T>` Pushes `value` on top of stack, returns the `Stack` instance.

- `pop(): T | null` Pops and returns top value from stack. Returns `null` if stack empty.

---
