import {BNode} from '.';

export function validate_b_tree(
  node: BNode<number> | undefined,
  max: number = Number.MAX_SAFE_INTEGER,
  min: number = Number.MIN_SAFE_INTEGER
): boolean {
  if (!node) {
    return true;
  }

  if (node.val < min || node.val > max) {
    return false;
  }

  return (
    validate_b_tree(node.left, node.val, min) &&
    validate_b_tree(node.right, max, node.val)
  );
}
