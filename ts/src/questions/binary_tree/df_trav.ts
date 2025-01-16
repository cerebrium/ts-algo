import {BNode} from '.';

export enum BfsType {
  'POST' = 'post',
  'PRE' = 'pre',
  'IN' = 'in',
}

export function dfs_rec(
  node: BNode<number> | undefined,
  kind: BfsType
): Array<number> {
  const nodes: Array<number> = [];

  traverse(node, kind, nodes);

  return nodes;
}

function traverse(
  node: BNode<number> | undefined,
  kind: BfsType,
  visited: Array<number>
) {
  /*
   *
   * We will go through the trees and add the nodes
   * in the order that we reach them
   *
   */

  if (!node) {
    return;
  }

  // pre
  if (kind === BfsType.PRE) {
    visited.push(node.val);
    traverse(node.left, kind, visited);
    traverse(node.right, kind, visited);
  }

  // in
  if (kind === BfsType.IN) {
    traverse(node.left, kind, visited);
    visited.push(node.val);
    traverse(node.right, kind, visited);
  }

  // post
  if (kind === BfsType.POST) {
    traverse(node.left, kind, visited);
    traverse(node.right, kind, visited);
    visited.push(node.val);
  }
}
