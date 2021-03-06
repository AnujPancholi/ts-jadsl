import { Stack } from "../index";

describe("#Stack - constructor", () => {
  test("create empty stack in when nothing passed to constructor", () => {
    const freshStack = new Stack();

    expect(freshStack.size()).toEqual(0);
  });
});
