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
