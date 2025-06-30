// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
// between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”
//

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return null;
  }
  if (!q) {
    return p;
  }

  if (!p) {
    return q;
  }

  const left = traverse(root.left, p, q);
  const right = traverse(root.left, p, q);

  if (!left && !right) {
    return root;
  }

  if (left) {
    return left;
  }

  if (right) {
    return right;
  }

  return null;
}

const traverse = (
  currNode: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!currNode) {
    return null;
  }

  if (currNode === p || currNode === q) {
    return currNode;
  }

  const left = traverse(currNode.left, p, q);
  const right = traverse(currNode.right, p, q);

  if (!left && !right) {
    return null;
  }

  if (left) {
    return left;
  }

  if (right) {
    return right;
  }

  return null;
};
