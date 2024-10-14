import {BNode} from '.';

export enum BfsType {
  'POST' = 'post',
  'PRE' = 'pre',
  'IN' = 'in',
}

export function bfs_rec(
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
  // Base Case
  if (!node) {
    return;
  }
  // Pre
  if (kind === BfsType.PRE) {
    visited.push(node.val);
    traverse(node.left, kind, visited);
    traverse(node.right, kind, visited);
  }

  // Recurse
  if (kind === BfsType.IN) {
    traverse(node.left, kind, visited);
    visited.push(node.val);
    traverse(node.right, kind, visited);
  }
  // Post
  if (kind === BfsType.POST) {
    traverse(node.right, kind, visited);
    traverse(node.left, kind, visited);
    visited.push(node.val);
  }
}
