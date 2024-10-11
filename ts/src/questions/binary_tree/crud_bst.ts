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
): BNode<T> {
  // Base case
  // node behind is less or greater and node in front is null
  if (!node) {
    const new_node = {val};
    if (prev_node.val > val) {
      prev_node.left = {val};
      return new_node;
    }

    prev_node.right = new_node;
    return new_node;
  }

  // node behind is less and node in front is more
  if (prev_node.val <= val && node.val >= val) {
    const new_node = {val, right: node};
    prev_node.right = new_node;
    return new_node;
  }

  // node behind is greater and node in front is less
  if (prev_node.val >= val && node.val <= val) {
    const new_node = {val, left: node};
    prev_node.left = new_node;
    return new_node;
  }

  // Recurse
  if (node.val >= val) {
    const new_node = add_node(node.left, val, node);
    return new_node;
  }

  const new_node = add_node(node.right, val, node);
  return new_node;
}
