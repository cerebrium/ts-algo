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

// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
// If two nodes are in the same row and column, the order should be from left to right.

export function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const answer: number[][] = [];
  const verticalMap: Map<number, number[]> = new Map();
  let min: number = 0;
  let max: number = 0;
  const que: Array<[number, TreeNode]> = [[0, root]];
  let currIdx = 0;

  while (currIdx < que.length) {
    const [verIdx, _node] = que[currIdx];

    const hasSubArray = verticalMap.get(verIdx);

    if (!hasSubArray) {
      verticalMap.set(verIdx, [_node.val]);
    } else {
      hasSubArray.push(_node.val);
      verticalMap.set(verIdx, hasSubArray);
    }

    if (_node.left) {
      que.push([verIdx - 1, _node.left]);
      min = Math.min(verIdx - 1, min);
    }
    if (_node.right) {
      que.push([verIdx + 1, _node.right]);
      max = Math.max(verIdx + 1, max);
    }

    currIdx++;
  }

  for (let i = min; i <= max; i++) {
    const subArray = verticalMap.get(i);

    if (subArray && subArray.length) {
      answer.push(subArray);
    }
  }

  return answer;
}
