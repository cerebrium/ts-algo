export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter: number = 0;

  function traverse(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left + right) + 1;
  }

  traverse(root);

  return diameter;
}
