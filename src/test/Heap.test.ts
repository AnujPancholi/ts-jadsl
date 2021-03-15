import { Heap } from "../index";

describe("#Heap - constructor", () => {
  test("should construct empty heap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);

    expect(freshHeap.peek()).toBeNull();
    expect(freshHeap.size()).toBe(0);
  });
});

describe("#Heap - insert in minheap of numbers", () => {
  test("should insert value", () => {
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
});
