"use strict";
/**
 *
 *
 * The first index of the tuple is the node value
 * the second is the weight
 
 Example data:
 [
 [[1, 6]],
 [[2, 3]],
 [[3, 2]],
 [[4, 12], [5, 7]],
 [[1, 9], [5, 5]],
 [[6, 21]],
 [[7, 6]],
 [[0, 2]],
 ]



 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.adj_list_dfs = void 0;
function adj_list_dfs(graph, target, start = 0) {
    const path = [];
    const visited = new Set();
    traverse(graph, visited, path, start, target);
    if (!path.length) {
        return null;
    }
    return path;
}
exports.adj_list_dfs = adj_list_dfs;
function traverse(graph, visited, path, currNode, target) {
    if (visited.has(currNode)) {
        return false;
    }
    visited.add(currNode);
    path.push(currNode);
    if (currNode === target) {
        return true;
    }
    const children = graph[currNode];
    for (const [child, _] of children) {
        if (traverse(graph, visited, path, child, target)) {
            return true;
        }
    }
    path.pop();
    return false;
}
//# sourceMappingURL=dfs.js.map