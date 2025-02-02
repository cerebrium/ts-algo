import {BNode} from '.';

export function validate_b_tree(
  node: BNode<number> | undefined,
  max: number = Number.MAX_VALUE,
  min: number = Number.MIN_VALUE
): boolean {
  if (!node) {
    return true;
  }

  if (node.val > max || node.val < min) {
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
