"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseLinkedList_1 = require("../../questions/leet_code/reverseLinkedList");
test('reverse_linked_list', () => {
    const tail = { value: 4, next: null };
    const beforeTail = { value: 3, next: tail };
    const beforeTailTail = { value: 2, next: beforeTail };
    const beforeTailTailTail = { value: 1, next: beforeTailTail };
    const head = { value: 0, next: beforeTailTailTail };
    const newHead = (0, reverseLinkedList_1.reverseLinkedList)(head);
    let currNode = newHead;
    const values = [];
    while (currNode) {
        values.push(currNode.value);
        currNode = currNode.next;
    }
    const expected = [4, 3, 2, 1, 0];
    expect(values.length).toEqual(5);
    for (let i = 0; i < expect.length; i++) {
        expect(expected[i]).toEqual(values[i]);
    }
});
//# sourceMappingURL=reverseLinkedList.test.js.map