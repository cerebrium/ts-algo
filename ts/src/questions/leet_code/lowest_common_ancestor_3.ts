// Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
//
// Each node will have a reference to its parent node. The definition for Node is below:
//
// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }
// According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes
// p and q in a tree T is the lowest node that has both p and q as descendants
// (where we allow a node to be a descendant of itself)."
//
// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q exist in the tree.

export class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  parent: _Node | null;

  constructor(v: number) {
    this.val = v;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function lowestCommonAncestorThree(
  p: _Node | null,
  q: _Node | null
): _Node | null {
  if (!p || !q) {
    return null;
  }
  const eldersOfQ = new Map();
  let currNode: _Node | null = q;

  while (currNode) {
    eldersOfQ.set(currNode.val, currNode);
    currNode = currNode.parent;
  }

  currNode = p;
  while (currNode) {
    const hasNode = eldersOfQ.get(currNode.val);
    if (hasNode) {
      return hasNode;
    }
    currNode = currNode.parent;
  }

  return null;
}
