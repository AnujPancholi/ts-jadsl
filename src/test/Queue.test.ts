import { Queue } from "../index";

describe("#Queue - constructor", () => {
  test("empty queue", () => {
    const freshQueue = new Queue<number>();

    expect(freshQueue.length()).toBe(0);
    expect(freshQueue.getFront()).toBeNull();
  });

  test("non-empty queue", () => {
    const qData = [4, 0, 6, -7];
    const freshQueue = new Queue<number>(qData);

    expect(freshQueue.length()).toBe(qData.length);
    expect(freshQueue.getFront()).toBe(qData[0]);
  });
});

describe("#Queue - enqueue", () => {
  test("add to queue", () => {
    const freshQueue = new Queue<number>();

    freshQueue.enqueue(4);

    expect(freshQueue.length()).toBe(1);
    expect(freshQueue.getFront()).toBe(4);

    freshQueue.enqueue(5);
    freshQueue.enqueue(6);

    expect(freshQueue.length()).toBe(3);
    expect(freshQueue.getFront()).toBe(4);
  });
});
