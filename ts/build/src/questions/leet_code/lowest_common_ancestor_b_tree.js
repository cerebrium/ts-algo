"use strict";
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
// between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowestCommonAncestor = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function lowestCommonAncestor(root, p, q) {
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
    let qRow = {
        row: null,
        rowIdx: -1,
        idxInRow: -1,
        isLeft: false,
        rowPossibleLength: -1,
        isRoot: false,
    };
    let pRow = {
        row: null,
        rowIdx: -1,
        idxInRow: -1,
        isLeft: false,
        rowPossibleLength: -1,
        isRoot: false,
    };
    const rows = [[root]];
    let idx = 0;
    while (idx < rows.length) {
        const currentRow = rows[idx];
        const nextRow = [];
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
    }
    else {
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
exports.lowestCommonAncestor = lowestCommonAncestor;
function returnRowLength(rowIdx) {
    if (rowIdx === 0) {
        return 1;
    }
    if (rowIdx === 1) {
        return 2;
    }
    return rowIdx ** 2;
}
function updateValues(value) {
    value.rowPossibleLength = returnRowLength(value.rowIdx);
    value.isLeft = isLeft(value);
}
function isLeft(value) {
    if (value.isRoot) {
        return false;
    }
    return value.idxInRow < value.rowPossibleLength / 2;
}
//# sourceMappingURL=lowest_common_ancestor_b_tree.js.map