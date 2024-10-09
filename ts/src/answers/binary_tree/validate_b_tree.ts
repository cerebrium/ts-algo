import {BNode} from '../../questions/binary_tree';

export function validate_b_tree(
  node: BNode | undefined,
  max: number = Number.MAX_VALUE,
  min: number = Number.MIN_VALUE
): boolean {
  // Base Case
  // if no node -> true
  if (!node) {
    return true;
  }

  // if node.val is higher than max, or less than min
  if (node.val > max || node.val < min) {
    return false;
  }

  // Recurse if any children false, we
  // need to return false.
  if (
    !validate_b_tree(node.left, node.val, min) ||
    !validate_b_tree(node.right, max, node.val)
  ) {
    return false;
  }

  return true;
}
