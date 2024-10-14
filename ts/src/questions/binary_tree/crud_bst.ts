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

export function delete_node<T>(
  node: BNode<T> | undefined,
  val: T,
  prev_node: BNode<T>
): void {
  // Base case
  // if val === node.val -> delete node
  // if node === null -> not found -> return null
  if (!node) {
    return;
  }

  // Delete case
  if (node.val === val) {
    return _handel_delete_node(node, val, prev_node);
  }

  // Find case
  if (node.val > val) {
    return delete_node(node.left, val, node);
  } else {
    return delete_node(node.right, val, node);
  }
}

function _handel_delete_node<T>(
  node: BNode<T>,
  val: T,
  prev_node: BNode<T>
): void {
  // Delete
  // cases 1: 0 children -> remove ref to it
  if (!node.left && !node.right) {
    if (prev_node.val > val) {
      prev_node.left = undefined;
      return;
    } else {
      prev_node.right = undefined;
      return;
    }
  }

  // Case 2: 1 child -> point prev to child
  if (!node.left && node.right) {
    if (prev_node.val > val) {
      prev_node.left = node.right;
      return;
    } else {
      prev_node.right = node.right;
      return;
    }
  }

  if (node.left && !node.right) {
    if (prev_node.val > val) {
      prev_node.left = node.left;
      return;
    } else {
      prev_node.right = node.left;
      return;
    }
  }

  // Case 3: 2 children -> find smallest node in decendent larger tree
  // We need to:
  // find the smallest child on the right side
  let parent = node;
  let right_most_node = node.right as BNode<T>;

  while (right_most_node?.left) {
    parent = right_most_node;
    right_most_node = right_most_node.left;
  }

  // Handle the found replacments parent
  // 1 child:
  // point parent to child
  if (right_most_node.right) {
    parent.left = right_most_node.right;
  }

  // 0 children
  // remove pointer from parent
  parent.left = undefined;

  // Give the smallest large node the found
  // nodes children
  right_most_node.left = node.left;
  right_most_node.right = node.right;

  // Replace found node with detached smallest
  // larget node
  if (prev_node.val > val) {
    prev_node.left = right_most_node;
    return;
  } else {
    prev_node.right = right_most_node;
    return;
  }
}
