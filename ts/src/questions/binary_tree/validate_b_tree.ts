import {BNode} from '.';

export function validate_b_tree(
  node: BNode<number> | undefined,
  max: number = Number.MAX_SAFE_INTEGER,
  min: number = Number.MIN_SAFE_INTEGER
): boolean {
  // No node is a valid tree
  if (!node) {
    return true;
  }

  if (node.val < min || node.val > max) {
    return false;
  }

  if (
    validate_b_tree(node.left, node.val, min) &&
    validate_b_tree(node.right, max, node.val)
  ) {
    return true;
  }

  return false;
}
