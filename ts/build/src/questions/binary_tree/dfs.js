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
    if (!node) {
        return null;
    }
    if (node.val === target) {
        return node;
    }
    const foundNode = dfs(node.left, target) || dfs(node.right, target);
    if (foundNode) {
        return foundNode;
    }
    return null;
}
exports.dfs = dfs;
//# sourceMappingURL=dfs.js.map