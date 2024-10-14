/*
 *
 * Add node, Delete node, Update node
 *
 */

import {BNode} from '.';

/*
 *
 * Assuming that there is already a tree (single node exists)
 */
export function add_node<T>(
  node: BNode<T> | undefined,
  val: T,
  prev_node: BNode<T>
): void {
  // Base case
  // If node is null -> add the node
  if (!node) {
    if (prev_node.val > val) {
      prev_node.left = {val};
      return;
    }

    prev_node.right = {val};
    return;
  }

  if (node.val > val) {
    add_node(node.left, val, node);
  } else {
    add_node(node.right, val, node);
  }
}
