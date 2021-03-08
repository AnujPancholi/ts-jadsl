import { Stack } from "../index";

describe("#Stack - constructor", () => {
  test("create empty stack in when nothing passed to constructor", () => {
    const freshStack = new Stack();

    expect(freshStack.size()).toEqual(0);
  });

  test("create stack from array", () => {
    const listData = [2, 4, 5, 0, -6, 5, 0, 4];
    const freshStack = new Stack(listData);

    expect(freshStack.size()).toEqual(listData.length);
    expect(freshStack.peek()).toEqual(listData[0]);
  });
});

describe("#Stack - isEmpty", () => {
  test("returns true for empty stack", () => {
    const freshStack = new Stack<number>();

    expect(freshStack.isEmpty()).toBe(true);
  });

  test("return false for non-empty stack", () => {
    const freshStack = new Stack<number>([0, 9, 8]);

    expect(freshStack.isEmpty()).toBe(false);
  });
});

describe("#Stack - push", () => {
  test("push elem to empty stack", () => {
    const freshStack = new Stack<number>();
    const pushResult: Stack<number> = freshStack.push(3);

    expect(freshStack.size()).toBe(1);
    expect(freshStack.peek()).toBe(3);
    expect(pushResult === freshStack).toBe(true);
  });

  test("push elem to existing stack", () => {
    const freshStack = new Stack<number>([1, 2, 3]);
    freshStack.push(4);

    expect(freshStack.size()).toBe(4);
    expect(freshStack.peek()).toBe(4);
  });
});
