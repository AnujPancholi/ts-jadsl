import { LinkedList, ListNode } from "../index";

describe("#LinkedList - constructor", () => {
  test("make empty list", () => {
    const freshList = new LinkedList<number>();

    expect(freshList.get(0)).toBeNull();
    expect(freshList.length()).toBe(0);
  });

  test("make list initialized with array", () => {
    const listData = [3, 4, 5, 2, 6, 1, 3];
    const freshList: LinkedList<number> = new LinkedList<number>(listData);

    expect(freshList.length()).toEqual(listData.length);
  });

  test("make empty list if empty array passed", () => {
    const freshList: LinkedList<number> = new LinkedList<number>([]);

    expect(freshList.get(0)).toBeNull();
    expect(freshList.length()).toEqual(0);
  });
});

describe("#LinkedList - get", () => {
  const listData = [5, 6, 4, 5, 6, 67, 342432, 4, 5, 6, 23, 4, 0];
  const list = new LinkedList<number>(listData);
  const emptyList = new LinkedList<number>();

  test("fetch values for valid indices", () => {
    for (let i = 0; i < listData.length; ++i) {
      expect(list.get(i)).toEqual(listData[i]);
    }
  });

  test("fetch null for invalid indices", () => {
    expect(list.get(-1)).toBeNull();
    expect(list.get(listData.length)).toBeNull();
  });

  test("fetch null for any index in empty list", () => {
    for (let i = -2; i < 6; ++i) {
      expect(emptyList.get(i)).toBeNull();
    }
  });
});

describe("#LinkedList - insertAt", () => {
  let listData: number[];
  let list: LinkedList<number>;

  beforeEach(() => {
    listData = [3, 4, 5, 6, 4, 5, 0, -1, 7, -4, 0, 99];
    list = new LinkedList<number>(listData);
  });

  test("do nothing for invalid indices", () => {
    list.insertAt(-1, 8);
    expect(list.length()).toEqual(listData.length);
    list.insertAt(50, 8);
    expect(list.length()).toEqual(listData.length);
    for (let i = 0; i < listData.length; ++i) {
      expect(list.get(i)).toEqual(listData[i]);
    }
  });

  test("insert at head for 0 index", () => {
    const returnedList = list.insertAt(0, 55);
    expect(list.length()).toEqual(listData.length + 1);
    expect(list.get(0)).toEqual(55);
    expect(list.get(1)).toEqual(listData[0]);

    expect(returnedList === list).toBe(true);

    const emptyList = new LinkedList<number>();
    expect(emptyList.length()).toEqual(0);
    expect(emptyList.get(0)).toBeNull();
    emptyList.insertAt(0, 55);
    expect(emptyList.get(0)).toEqual(55);
    expect(emptyList.length()).toEqual(1);
  });

  test("insert at index", () => {
    const insertionIndex = 4;
    const data = 55;

    const returnedList = list.insertAt(insertionIndex, data);
    expect(list.length()).toEqual(listData.length + 1);
    expect(list.get(insertionIndex)).toEqual(data);
    expect(list.get(insertionIndex - 1)).toEqual(listData[insertionIndex - 1]);
    expect(list.get(insertionIndex + 1)).toEqual(listData[insertionIndex]);

    expect(returnedList === list).toBe(true);

    const tailInsertionData = 17;
    list.insertAt(list.length(), tailInsertionData);
    expect(list.length()).toEqual(listData.length + 2);
    expect(list.get(list.length() - 1)).toEqual(tailInsertionData);
    expect(list.get(list.length())).toBeNull();
  });
});

describe("#LinkedList - toArray", () => {
  const listData = [3, 4, 2, 5, 0, -1, 4, -1, 0, 6, 56];

  test("should convert to array", () => {
    const list = new LinkedList<number>(listData);
    const arr = list.toArray();
    expect(arr.length).toEqual(listData.length);
    listData.forEach((value, index) => {
      expect(arr[index]).toEqual(value);
    });
  });

  test("should return empty array for empty list", () => {
    const arr = new LinkedList<number>().toArray();
    expect(arr.length).toEqual(0);
  });
});

describe("#LinkedList - getHeadNode", () => {
  const listData = [4, 5, 6, 3, 4, 5, 0, -1, 4, 45];
  const list = new LinkedList<number>(listData);
  test("should return head node", () => {
    let node = list.getHeadNode();
    for (let i = 0; i < listData.length; ++i) {
      expect(node ? node.value : null).toEqual(listData[i]);
      node = node ? node.next : null;
    }
    expect(node).toBeNull();
  });
});

describe("#LinkedList - deleteAt", () => {
  const listData = [3, -1, 7, 8, 0, 99, 7, 53, 345, 0, 33];
  const list = new LinkedList<number>(listData);

  test("make no change if index invalid", () => {
    list.deleteAt(-1);
    list.deleteAt(listData.length);
    list.deleteAt(listData.length + 1);

    expect(list.length()).toEqual(listData.length);
    let walkerNode: ListNode<number> | null = list.getHeadNode(),
      i = 0;
    while (walkerNode !== null) {
      expect(walkerNode.value).toEqual(listData[i]);
      walkerNode = walkerNode.next;
      ++i;
    }

    expect(i).toEqual(listData.length);
  });
});
