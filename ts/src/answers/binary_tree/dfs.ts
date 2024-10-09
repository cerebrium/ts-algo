/*
 *
 * Given a binary tree. Do a depth first search to locate
 * if a given node exists. The tree will be using numbers,
 * and it will be decently balanced
 *
 */
interface BNode {
  val: number;
  left?: BNode;
  right?: BNode;
}

export function dfs(node: BNode, target: number): boolean {
  if (!node) {
    return false;
  }
  const iterate = (node: BNode | undefined) => {
    if (!node) {
      return false;
    }

    if (node?.val === target) {
      return true;
    }

    const is_left = iterate(node.left);
    if (is_left) {
      return true;
    }

    const is_right = iterate(node.right);
    if (is_right) {
      return true;
    }

    return false;
  };

  return iterate(node);
}
