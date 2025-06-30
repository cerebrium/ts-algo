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

type RowMetadata = {
  row: null | Array<TreeNode | null>;
  rowIdx: number;
  idxInRow: number;
  isLeft: boolean;
  rowPossibleLength: number;
  isRoot: boolean;
};

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!p || !q || !root) {
    return null;
  }

  if (p === root) {
    return p;
  }

  if (q === root) {
    return q;
  }

  // bfs, stratify each layer into arrays
  // check using math lowest conversion node

  let qRow: RowMetadata = {
    row: null,
    rowIdx: -1,
    idxInRow: -1,
    isLeft: false,
    rowPossibleLength: -1,
    isRoot: false,
  };
  let pRow: RowMetadata = {
    row: null,
    rowIdx: -1,
    idxInRow: -1,
    isLeft: false,
    rowPossibleLength: -1,
    isRoot: false,
  };

  const rows: Array<TreeNode | null>[] = [[root]];
  let idx = 0;

  while (idx < rows.length) {
    const currentRow = rows[idx];
    const nextRow: Array<TreeNode | null> = [];

    for (let i = 0; i < currentRow.length; i++) {
      const currNode = currentRow[i];
      if (!currNode) {
        continue;
      }

      if (currNode === q) {
        qRow.row = currentRow;
        qRow.rowIdx = idx;
        qRow.idxInRow = i;
        qRow.isRoot = !!!idx;
      }

      if (currNode === p) {
        pRow.row = currentRow;
        pRow.rowIdx = idx;
        pRow.idxInRow = i;
        qRow.isRoot = !!!idx;
      }

      if (currNode === p) {
        pRow.row = currentRow;
        pRow.rowIdx = idx;
      }

      nextRow.push(currNode.left, currNode.right);
    }

    if (nextRow.length) {
      rows.push(nextRow);
    }
    idx++;
  }

  if (qRow.idxInRow < 0 || qRow.rowIdx === -1 || qRow.idxInRow === -1) {
    throw new Error('Did not find the row');
  }

  if (pRow.idxInRow < 0 || pRow.rowIdx === -1 || pRow.idxInRow === -1) {
    throw new Error('Did not find the row');
  }

  updateValues(qRow);
  updateValues(pRow);

  /*
   *
   * Walk up the matrix. If the parent is null, pick the other.
   * The parent is always one row up, and math.floor(idx/2) or
   * if 0, parent is 0
   *
   */

  let qNodeIdx = qRow.idxInRow;
  let qNodeRow = qRow.rowIdx;

  let pNodeIdx = pRow.idxInRow;
  let pNodeRow = pRow.rowIdx;

  // Get to same row -> if on same row and idx matches, then
  // one is decendant of the other
  if (qNodeRow > pNodeRow) {
    while (qNodeRow > pNodeRow) {
      if (qNodeIdx !== 0) {
        qNodeIdx = Math.floor(qNodeIdx / 2);
      }

      qNodeRow--;
    }
  } else {
    while (pNodeRow > qNodeRow) {
      if (pNodeIdx !== 0) {
        pNodeIdx = Math.floor(pNodeIdx / 2);
      }

      pNodeRow--;
    }
  }

  // One is decendant of the other
  if (qNodeIdx === pNodeIdx) {
    return rows[pNodeRow][qNodeIdx];
  }

  while (qNodeIdx !== pNodeIdx) {
    if (qNodeIdx !== 0) {
      qNodeIdx = Math.floor(qNodeIdx / 2);
    }

    if (pNodeIdx !== 0) {
      pNodeIdx = Math.floor(pNodeIdx / 2);
    }

    qNodeRow--;
    pNodeRow--;
  }

  return rows[pNodeRow][qNodeIdx];
}

function returnRowLength(rowIdx: number): number {
  if (rowIdx === 0) {
    return 1;
  }

  if (rowIdx === 1) {
    return 2;
  }

  return rowIdx ** 2;
}

function updateValues(value: RowMetadata): void {
  value.rowPossibleLength = returnRowLength(value.rowIdx);
  value.isLeft = isLeft(value);
}

function isLeft(value: RowMetadata): boolean {
  if (value.isRoot) {
    return false;
  }

  return value.idxInRow < value.rowPossibleLength / 2;
}
