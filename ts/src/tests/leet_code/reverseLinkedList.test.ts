import {
  LinkedNode,
  reverseLinkedList,
} from '../../questions/leet_code/reverseLinkedList';

test('reverse_linked_list', () => {
  const tail: LinkedNode = {value: 4, next: null};
  const beforeTail: LinkedNode = {value: 3, next: tail};
  const beforeTailTail: LinkedNode = {value: 2, next: beforeTail};
  const beforeTailTailTail: LinkedNode = {value: 1, next: beforeTailTail};
  const head: LinkedNode = {value: 0, next: beforeTailTailTail};

  const newHead = reverseLinkedList(head);

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
