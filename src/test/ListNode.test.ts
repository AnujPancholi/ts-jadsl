import { ListNode } from "../index";

describe("#ListNode - constructor", () => {
  test("construct new node with given data", () => {
    const data = 5;
    const freshNode = new ListNode<number>(5);

    expect(freshNode.value).toBe(data);
    expect(freshNode.next).toBeNull();
  });
});
