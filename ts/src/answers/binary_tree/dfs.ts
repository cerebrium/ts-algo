/*
 *
 * Given a binary tree. Do a depth first search to locate
 * if a given node exists. The tree will be using numbers,
 * and it will be decently balanced
 *
 */

import {BNode} from '../../questions/binary_tree';

export function dfs(
  node: BNode<number> | undefined,
  target: number
): BNode<number> | null {
  if (!node) {
    return null;
  }

  if (node.val === target) {
    return node;
  }

  const foundNode = dfs(node.left, target) || dfs(node.right, target);
  if (foundNode) {
    return foundNode;
  }

  return null;
}
