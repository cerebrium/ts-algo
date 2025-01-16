import {BNode} from '.';

export function bf_trav(node: BNode<number>) {
  if (!node) {
    return [];
  }

  const values: number[] = [];

  let traversed = 0;
  const que: BNode<number>[] = [node];

  while (traversed < que.length) {
    const current_node = que[traversed];
    ++traversed;

    values.push(current_node.val);

    if (current_node.left) {
      que.push(current_node.left);
    }

    if (current_node.right) {
      que.push(current_node.right);
    }
  }

  return values;
}
