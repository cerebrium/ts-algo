export type LinkedNode = {
  value: number;
  next: LinkedNode | null;
};

export function reverseLinkedList(head: LinkedNode) {
  let currNode: LinkedNode | null = head;
  let prev = null;

  while (currNode) {
    const next: LinkedNode | null = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }

  return prev;
}
