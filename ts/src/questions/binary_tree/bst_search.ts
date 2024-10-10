import {BNode} from '.';

export function bst_search(
  node: BNode | undefined,
  target: number
): BNode | null {
  if (!node) {
    return null;
  }

  if (node.val === target) {
    return node;
  }

  if (node.val < target) {
    return bst_search(node.right, target);
  }
  if (node.val > target) {
    return bst_search(node.left, target);
  }

  return null;
}
