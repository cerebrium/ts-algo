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
    return bst_search(node.right, target);
  }

  return bst_search(node.left, target);
}
