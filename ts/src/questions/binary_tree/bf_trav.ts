import {BNode} from '.';

export function bf_trav(node: BNode<number>) {
  if (!node) {
    return [];
  }

  const ret_vals = [];
  const que = [node];
  let idx = 0;

  while (idx < que.length) {
    const currentNode = que[idx];

    if (currentNode.left) {
      que.push(currentNode.left);
    }

    if (currentNode.right) {
      que.push(currentNode.right);
    }

    ret_vals.push(currentNode.val);

    idx++;
  }

  return ret_vals;
}
