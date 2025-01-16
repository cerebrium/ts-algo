/*
 *
 * Given a binary tree. Do a depth first search to locate
 * if a given node exists. The tree will be using numbers,
 * and it will be decently balanced
 *
 */

import {BNode} from '.';

export function dfs(
  node: BNode<number> | undefined,
  target: number
): null | BNode<number> {
  // Base cases
  if (!node) {
    return null;
  }
  // Base cases
  if (node.val === target) {
    return node;
  }

  if (node.val > target) {
    const val = dfs(node.left, target);
    if (val) {
      return val;
    }
  }

  return dfs(node.right, target);
}
