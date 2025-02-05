import {ListNode} from '../../questions/leet_code/add_two_numbers';
import {removeNthFromEnd} from '../../questions/leet_code/remove_n_node_from_list';

test('remove_n_node', () => {
  let answer = removeNthFromEnd(make_whole_list([1, 2, 3, 4, 5]), 2);
  if (!answer) {
    throw new Error(
      'No answer, inputs \n head:' + [1, 2, 3, 4, 5] + '\n n:' + 2
    );
  }

  let expected_answer = [1, 2, 3, 5];
  let ans_arr: number[] = create_arr_from_list(answer);

  for (let i = 0; i < expected_answer.length; i++) {
    expect(expected_answer[i]).toEqual(ans_arr[i]);
  }

  answer = removeNthFromEnd(make_whole_list([1]), 1);

  expect(answer).toBeFalsy();

  answer = removeNthFromEnd(make_whole_list([1, 2]), 1);
  if (!answer) {
    throw new Error('No answer, inputs \n head:' + [1, 2] + '\n n:' + 1);
  }

  ans_arr = create_arr_from_list(answer);

  expected_answer = [1];

  for (let i = 0; i < ans_arr.length; i++) {
    expect(ans_arr[i]).toBe(expected_answer[i]);
  }

  answer = removeNthFromEnd(make_whole_list([1, 2]), 2);
  if (!answer) {
    throw new Error('No answer, inputs \n head:' + [1, 2] + '\n n:' + 2);
  }

  console.log('what is the answer', answer);

  ans_arr = create_arr_from_list(answer);

  expected_answer = [2];
  for (let i = 0; i < ans_arr.length; i++) {
    expect(ans_arr[i]).toBe(expected_answer[i]);
  }
});

function return_node(num: number) {
  return new ListNode(num);
}

function make_whole_list(nums: number[]) {
  let head = return_node(nums[0]);
  let curr_node = head;

  for (let i = 1; i < nums.length; i++) {
    curr_node.next = return_node(nums[i]);
    curr_node = curr_node.next;
  }

  return head;
}

function create_arr_from_list(head: ListNode) {
  const vals: number[] = [];

  let curr_node: ListNode | null = head;
  while (curr_node) {
    vals.push(curr_node.val);
    curr_node = curr_node.next;
  }

  return vals;
}
