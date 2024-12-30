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
    /*
     *
     * If the target is larger than node, go right,
     * if target is less than node, go left.
     *
     */
    if (!node) {
        return null;
    }
    // Base cases
    if (node.val === target) {
        return node;
    }
    return target < node.val ? dfs(node.left, target) : dfs(node.right, target);
}
exports.dfs = dfs;
//# sourceMappingURL=dfs.js.map