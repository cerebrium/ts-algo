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
  /*
   *
   * If the target is larger than node, go right,
   * if target is less than node, go left.
   *
   */

  if (!node) {
    return null;
  }
  // Base cases
  if (node.val === target) {
    return node;
  }

  return target < node.val ? dfs(node.left, target) : dfs(node.right, target);
}
