"use strict";
// Example 1:
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
const lowest_common_ancestor_b_tree_1 = require("../../questions/leet_code/lowest_common_ancestor_b_tree");
function makeTreeNodes(nums, p, q) {
    let currLength = 1;
    let idx = 0;
    const rows = [];
    let qNode = null;
    let pNode = null;
    // Split the b tree up by rows
    while (idx < nums.length) {
        let localArr = [];
        for (let i = idx; i < currLength + idx; i++) {
            if (i > nums.length - 1) {
                break;
            }
            localArr.push(nums[i]);
        }
        idx = idx + currLength;
        currLength *= 2;
        rows.push(localArr);
    }
    const nodeRows = [];
    for (let x = 0; x < rows.length; x++) {
        const row = rows[x];
        const localNodeRow = [];
        for (let i = 0; i < row.length; i++) {
            if (row[i] === null) {
                continue;
            }
            const newNode = new lowest_common_ancestor_b_tree_1.TreeNode(row[i]);
            if (row[i] === p) {
                pNode = newNode;
            }
            if (row[i] === q) {
                qNode = newNode;
            }
            if (x === 0) {
                localNodeRow.push(newNode);
                break;
            }
            // We want to link the parent to the children
            const parentIdx = Math.floor(i / 2);
            const isRight = !!(i % 2);
            const parent = nodeRows[x - 1][parentIdx];
            if (!isRight) {
                parent.left = newNode;
            }
            else {
                parent.right = newNode;
            }
            localNodeRow.push(newNode);
        }
        nodeRows.push(localNodeRow);
    }
    const root = nodeRows[0][0] ? nodeRows[0][0] : null;
    if (!root) {
        throw new Error('No root, makeTreeNodes is broken');
    }
    return [root, pNode, qNode];
}
// Explanation: The LCA of nodes 5 and 1 is 3.
test('lowest_common_ancestor', () => {
    const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const p = 5;
    const q = 1;
    const [root, pNode, qNode] = makeTreeNodes(nums, p, q);
    const val = (0, lowest_common_ancestor_b_tree_1.lowestCommonAncestor)(root, pNode, qNode);
    expect(val).toBeTruthy();
    if (val) {
        expect(val.val).toBe(3);
    }
});
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
test('lowest_common_ancestor', () => {
    const nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const p = 5;
    const q = 4;
    const [root, pNode, qNode] = makeTreeNodes(nums, p, q);
    const val = (0, lowest_common_ancestor_b_tree_1.lowestCommonAncestor)(root, pNode, qNode);
    expect(val).toBeTruthy();
    if (val) {
        expect(val.val).toBe(5);
    }
});
test('lowest_common_ancestor', () => {
    const nums = [1, 2];
    const p = 1;
    const q = 2;
    const [root, pNode, qNode] = makeTreeNodes(nums, p, q);
    const val = (0, lowest_common_ancestor_b_tree_1.lowestCommonAncestor)(root, pNode, qNode);
    expect(val).toBeTruthy();
    if (val) {
        expect(val.val).toBe(1);
    }
});
//# sourceMappingURL=lowest_common.test.js.map