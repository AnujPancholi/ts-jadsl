import { Heap } from "../index";

describe("#Heap - constructor", () => {
  test("should construct empty heap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);

    expect(freshHeap.peek()).toBeNull();
    expect(freshHeap.size()).toBe(0);
  });
});

describe("#Heap - insert", () => {
  test("should insert value", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);
    const heapData = [5, 6, 3, 7, 2, 0, -3];

    freshHeap.insert(heapData[0]);

    expect(freshHeap.peek()).toBe(heapData[0]);
    expect(freshHeap.size()).toBe(1);
  });
});
