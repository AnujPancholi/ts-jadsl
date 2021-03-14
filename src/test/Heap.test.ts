import { Heap } from "../index";

describe("#Heap - constructor", () => {
  test("should construct empty heap", () => {
    const freshHeap = new Heap<number>((a, b) => a - b);

    expect(freshHeap.peek()).toBeNull();
  });
});
