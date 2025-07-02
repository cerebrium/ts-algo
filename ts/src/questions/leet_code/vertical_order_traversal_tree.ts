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
  const traversedNodes: number[][] = [];

  const nodeMap: Map<number, Array<{row: number; val: number}>> = new Map();
  const minMax: [number, number] = [0, 0];

  traverse(root, 0, 0, nodeMap, minMax);

  const [min, max] = minMax;

  for (let i = min; i <= max; i++) {
    const nodes = nodeMap.get(i);

    if (!nodes) {
      throw new Error('i is here but not in map: ' + i);
    }

    const finalNodes = nodes.sort((a, b) => a.row - b.row).map(x => x.val);

    traversedNodes.push(finalNodes);
  }

  return traversedNodes;
}

const traverse = (
  _node: TreeNode | null,
  column: number,
  row: number,
  nodeMap: Map<number, Array<{row: number; val: number}>>,
  minMax: [number, number]
) => {
  const [min, max] = minMax;
  if (!_node) {
    return;
  }

  if (min > column) {
    minMax[0] = column;
  }

  if (max < column) {
    minMax[1] = column;
  }

  const hasColumn = nodeMap.get(column);

  if (hasColumn) {
    hasColumn.push({row, val: _node.val});
    nodeMap.set(column, hasColumn);
  } else {
    nodeMap.set(column, [{row, val: _node.val}]);
  }
  traverse(_node.left, column - 1, row + 1, nodeMap, minMax);
  traverse(_node.right, column + 1, row + 1, nodeMap, minMax);
};
