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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 0;
  }

  let diameter: number = 0;

  const traverse = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);

    return Math.max(left, right) + 1;
  };

  return diameter;
}
