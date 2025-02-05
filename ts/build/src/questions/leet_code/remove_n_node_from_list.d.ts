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
export declare class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null);
}
export declare function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null;
