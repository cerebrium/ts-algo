"use strict";
/*
 *
 * Given a binary tree. Do a depth first search to locate
 * if a given node exists. The tree will be using numbers,
 * and it will be decently balanced
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs = void 0;
function dfs(node, target) {
    // Base cases
    if (!node) {
        return null;
    }
    // Base cases
    if (node.val === target) {
        return node;
    }
    if (node.val > target) {
        const val = dfs(node.left, target);
        if (val) {
            return val;
        }
    }
    return dfs(node.right, target);
}
exports.dfs = dfs;
//# sourceMappingURL=dfs.js.map