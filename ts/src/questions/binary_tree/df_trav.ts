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
  if (!node) {
    return [];
  }

  const values: number[] = [];

  traverse(node, kind, values);

  return values;
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

  switch (kind) {
    case BfsType.IN:
      traverse(node.left, kind, visited);
      visited.push(node.val);
      traverse(node.right, kind, visited);
      break;
    case BfsType.PRE:
      visited.push(node.val);
      traverse(node.left, kind, visited);
      traverse(node.right, kind, visited);
      break;
    default:
      traverse(node.left, kind, visited);
      traverse(node.right, kind, visited);
      visited.push(node.val);
  }
}
