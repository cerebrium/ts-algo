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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) {
    return null;
  }

  // Make an array of the nodes
  const ll_arr: ListNode[] = [];
  let curr_node: ListNode | null = head;

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
  } else {
    node_before.next = ll_arr[ll_arr.length - n + 1];
  }

  return head;
}
