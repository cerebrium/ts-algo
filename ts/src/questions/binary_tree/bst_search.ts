import {BNode} from '.';

export function bst_search(
  node: BNode<number> | undefined,
  target: number
): BNode<number> | null {
  if (!node) {
    return null;
  }

  if (node.val === target) {
    return node;
  }

  if (target > node.val) {
    const val = bst_search(node.right, target);
    if (val) {
      return val;
    }
  } else {
    const val = bst_search(node.left, target);
    if (val) {
      return val;
    }
  }

  return null;
}
