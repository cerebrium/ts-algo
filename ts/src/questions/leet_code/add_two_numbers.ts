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
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are
 * stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and
 * return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 *
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let curr_first_pointer = l1;
  let curr_second_pointer = l2;

  let head = null;
  let remainder = 0;
  let answer: null | ListNode = null;

  while (curr_first_pointer || curr_second_pointer) {
    let current_sum = 0;

    if (!curr_first_pointer) {
      current_sum += remainder + curr_second_pointer!.val;
      remainder = 0;

      while (current_sum > 9) {
        remainder += 1;
        current_sum -= 10;
      }

      const new_node = new ListNode(current_sum);
      if (!answer) {
        answer = new_node;
        head = new_node;

        curr_second_pointer = curr_second_pointer!.next;
        continue;
      }

      answer.next = new_node;

      answer = answer.next;
      curr_second_pointer = curr_second_pointer!.next;
      continue;
    }

    if (!curr_second_pointer) {
      current_sum += remainder + curr_first_pointer!.val;
      remainder = 0;

      while (current_sum > 9) {
        remainder += 1;
        current_sum -= 10;
      }

      const new_node = new ListNode(current_sum);
      if (!answer) {
        answer = new_node;
        head = new_node;

        curr_first_pointer = curr_first_pointer!.next;
        continue;
      }

      answer.next = new_node;

      answer = answer.next;
      curr_first_pointer = curr_first_pointer!.next;
      continue;
    }

    current_sum += remainder + curr_first_pointer.val + curr_second_pointer.val;
    remainder = 0;

    while (current_sum > 9) {
      remainder += 1;
      current_sum -= 10;
    }

    const new_node = new ListNode(current_sum);
    if (!answer) {
      answer = new_node;
      head = new_node;

      curr_first_pointer = curr_first_pointer.next;
      curr_second_pointer = curr_second_pointer.next;
      continue;
    }

    answer.next = new_node;

    answer = answer.next;
    curr_first_pointer = curr_first_pointer.next;
    curr_second_pointer = curr_second_pointer.next;
  }

  while (remainder > 0) {
    if (remainder < 10) {
      answer!.next = new ListNode(remainder);
      answer = answer!.next;
      break;
    }

    const num_to_add = Math.floor(remainder % 10);
    answer!.next = new ListNode(remainder);
    answer = answer!.next;

    remainder = remainder - num_to_add * 10;
  }

  if (!head) {
    return null;
  }

  return head;
}
