import { Stack } from "../src/index";

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

describe("#Stack - peek", () => {
  test("should return null in empty stack", () => {
    const freshStack = new Stack<number>();

    expect(freshStack.peek()).toBe(null);
  });

  test("should return head value in non-empty stack without changing stack", () => {
    const stackData = [8, 0, -3, 4, 5];
    const freshStack = new Stack<number>(stackData);

    const peekValue = freshStack.peek();

    expect(freshStack.size()).toBe(stackData.length);
    expect(peekValue).toBe(stackData[0]);
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

describe("#Stack - pop", () => {
  test("return null with no change if pop called on empty stack", () => {
    const freshStack = new Stack<number>();

    const poppedValue = freshStack.pop();

    expect(poppedValue).toBeNull();
    expect(freshStack.size()).toBe(0);
  });

  test("return popped value if pop called on non-empty stack", () => {
    const listData = [4, 5, 3, 6];
    const freshStack = new Stack<number>(listData);

    const expectedPoppedValue = freshStack.peek();
    const poppedValue = freshStack.pop();

    expect(freshStack.size()).toBe(listData.length - 1);
    expect(poppedValue).toBe(expectedPoppedValue);
    expect(freshStack.peek()).toBe(listData[1]);
  });
});
