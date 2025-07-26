"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLinkedList = void 0;
function reverseLinkedList(head) {
    let currNode = head;
    let prev = null;
    while (currNode) {
        const next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
    }
    return prev;
}
exports.reverseLinkedList = reverseLinkedList;
//# sourceMappingURL=reverseLinkedList.js.map