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
    const visited = new Array(graph.length).fill(false);
    walk(graph, target, start, visited, path);
    if (!path.length) {
        return null;
    }
    return path;
}
exports.adj_list_dfs = adj_list_dfs;
function walk(graph, target, curr_node, visited, path) {
    // pre
    visited[curr_node] = true;
    path.push(curr_node);
    if (target === curr_node) {
        return true;
    }
    const children = graph[curr_node];
    // recurse
    for (const [child, _] of children) {
        if (visited[child]) {
            continue;
        }
        if (walk(graph, target, child, visited, path)) {
            return true;
        }
    }
    // post
    path.pop();
    return false;
}
//# sourceMappingURL=dfs.js.map