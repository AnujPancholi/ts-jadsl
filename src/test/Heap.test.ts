import { Heap } from "../index";

describe("#Heap - constructor", () => {
  test("should construct empty heap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);

    expect(freshHeap.peek()).toBeNull();
    expect(freshHeap.size()).toBe(0);
  });

  test("should construct heap from array", () => {
    const heapData = [5, 6, 3, 7, 2, 0, -3];
    const sortedHeapData = [...heapData].sort((a, b) => a - b);

    const freshMinHeap = new Heap<number>((a, b) => a - b, heapData);

    let i = 0;
    while (freshMinHeap.size() > 0) {
      expect(freshMinHeap.extract()).toBe(sortedHeapData[i]);
      ++i;
    }
  });
});

describe("#Heap - insert", () => {
  test("should insert value in minheap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);
    const heapData = [5, 6, 3, 7, 2, 0, -3];
    const sortedHeapData = [...heapData].sort((a, b) => a - b);

    freshHeap.insert(heapData[0]);

    expect(freshHeap.peek()).toBe(heapData[0]);
    expect(freshHeap.size()).toBe(1);

    for (let i = 1; i < heapData.length; ++i) {
      freshHeap.insert(heapData[i]);
    }

    expect(freshHeap.size()).toBe(heapData.length);
    expect(freshHeap.peek()).toBe(sortedHeapData[0]);
  });

  test("should insert in maxheap", () => {
    const freshHeap = new Heap<number>((a, b) => b - a);
    const heapData = [5, 6, 3, 7, 2, 0, -3];
    const sortedHeapData = [...heapData].sort((a, b) => b - a);

    for (let i = 0; i < heapData.length; ++i) {
      freshHeap.insert(heapData[i]);
    }

    expect(freshHeap.size()).toBe(heapData.length);
    let i = 0;
    while (freshHeap.size() > 0) {
      const poppedVal = freshHeap.extract();
      expect(poppedVal).toEqual(sortedHeapData[i]);
      ++i;
    }
  });

  test("should insert in maxheap of objects", () => {
    interface valobj {
      val: number;
    }
    const freshHeap = new Heap<valobj>((a, b) => b.val - a.val);
    const heapData = [
      { val: 5 },
      { val: 6 },
      { val: 3 },
      { val: 7 },
      { val: 2 },
      { val: 0 },
      { val: -3 },
    ];
    const sortedHeapData = [...heapData].sort((a, b) => b.val - a.val);

    for (let i = 0; i < heapData.length; ++i) {
      freshHeap.insert(heapData[i]);
    }

    expect(freshHeap.size()).toBe(heapData.length);
    let i = 0;
    while (freshHeap.size() > 0) {
      const poppedVal = freshHeap.extract();
      expect(poppedVal).toBeDefined();

      expect(poppedVal !== null ? poppedVal.val : null).toBeDefined();
      expect(poppedVal !== null ? poppedVal.val : null).toEqual(
        sortedHeapData[i].val
      );
      ++i;
    }
  });
  test("should insert in minheap of objects", () => {
    interface valobj {
      val: number;
    }
    const freshHeap = new Heap<valobj>((a, b) => a.val - b.val);
    const heapData = [
      { val: 5 },
      { val: 6 },
      { val: 3 },
      { val: 7 },
      { val: 2 },
      { val: 0 },
      { val: -3 },
    ];
    const sortedHeapData = [...heapData].sort((a, b) => a.val - b.val);

    for (let i = 0; i < heapData.length; ++i) {
      freshHeap.insert(heapData[i]);
    }

    expect(freshHeap.size()).toBe(heapData.length);
    let i = 0;
    while (freshHeap.size() > 0) {
      const poppedVal = freshHeap.extract();
      expect(poppedVal).toBeDefined();

      expect(poppedVal !== null ? poppedVal.val : null).toBeDefined();
      expect(poppedVal !== null ? poppedVal.val : null).toEqual(
        sortedHeapData[i].val
      );
      ++i;
    }
  });
});

describe("#Heap - pop", () => {
  test("pop from minheap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);
    const heapData = [5, 6, 3, 7, 2, 0, -3];
    const sortedHeapData = [...heapData].sort((a, b) => a - b);
    for (let i = 0; i < heapData.length; ++i) {
      freshHeap.insert(heapData[i]);
    }
    let i = 0;
    while (freshHeap.size() > 1) {
      const poppedValue = freshHeap.extract();
      expect(poppedValue).toBe(sortedHeapData[i]);
      expect(freshHeap.peek()).toBe(sortedHeapData[i + 1]);
      ++i;
    }
    expect(freshHeap.peek()).toEqual(sortedHeapData[i]);
  });

  test("should return null if heap empty", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);
    expect(freshHeap.extract()).toBeNull();
  });
});
