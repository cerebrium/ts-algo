"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNthFromEnd = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.ListNode = ListNode;
function removeNthFromEnd(head, n) {
    if (!head) {
        return null;
    }
    // Make an array of the nodes
    const ll_arr = [];
    let curr_node = head;
    while (curr_node) {
        ll_arr.push(curr_node);
        curr_node = curr_node.next;
    }
    if (ll_arr.length === 1) {
        return null;
    }
    const node_before = ll_arr[ll_arr.length - n - 1];
    if (!node_before) {
        head = head.next;
        return head;
    }
    if (ll_arr.length - n + 1 > ll_arr.length - 1) {
        node_before.next = null;
    }
    else {
        node_before.next = ll_arr[ll_arr.length - n + 1];
    }
    return head;
}
exports.removeNthFromEnd = removeNthFromEnd;
//# sourceMappingURL=remove_n_node_from_list.js.map