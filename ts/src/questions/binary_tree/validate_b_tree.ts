import {BNode} from '.';

export function validate_b_tree(
  node: BNode<number> | undefined,
  max: number = Number.MAX_SAFE_INTEGER,
  min: number = Number.MIN_SAFE_INTEGER
): boolean {
  if (!node) {
    return true;
  }

  if (node.val > max || node.val < min) {
    return false;
  }

  if (
    validate_b_tree(node.right, max, node.val) &&
    validate_b_tree(node.left, node.val, min)
  ) {
    return true;
  }

  return false;
}
