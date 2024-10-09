/*
 *
 * Validate that a tree is a binary tree
 *
 */

import {BNode} from '.';

export function validate_b_tree(head: BNode): boolean {
  const iterate = (
    node: BNode | undefined,
    max: number = Number.MAX_SAFE_INTEGER,
    min: number = Number.MIN_SAFE_INTEGER
  ) => {
    if (!node) {
      return true;
    }

    if (
      node.val < max &&
      node.val > min &&
      iterate(node.left, node.val, min) &&
      iterate(node.right, min, node.val)
    ) {
      return true;
    }

    return false;
  };

  return iterate(head);
}
