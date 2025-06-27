class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 0;
  }

  return traverse(root.right, 0) + traverse(root.left, 0);
}

function traverse(node: TreeNode | null, count: number): number {
  if (!node) {
    return count;
  }

  return Math.max(
    traverse(node.right, count + 1),
    traverse(node.left, count + 1)
  );
}
