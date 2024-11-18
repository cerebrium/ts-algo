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
function adj_list_dfs(graph, target) {
    const path = [];
    const parent_ref = new Array(graph.length).fill(-1);
    const visited = new Array(graph.length).fill(false);
    visited[0] = true;
    const found_node = _walk(graph, parent_ref, 0, target, visited);
    if (!found_node) {
        return null;
    }
    // Walk backwards
    let curr_node = parent_ref[target];
    path.push(target);
    while (curr_node !== -1) {
        path.push(curr_node);
        curr_node = parent_ref[curr_node];
    }
    return path.reverse();
}
exports.adj_list_dfs = adj_list_dfs;
function _walk(graph, parent_ref, node_idx, target, visited) {
    const node = graph[node_idx];
    for (let i = 0; i < node.length; i++) {
        const [child, _] = [node[i][0], node[i][1]];
        if (child === target) {
            // Add to parent ref, and return
            parent_ref[child] = node_idx;
            return true;
        }
        if (visited[child]) {
            continue;
        }
        parent_ref[child] = node_idx;
        visited[child] = true;
        if (_walk(graph, parent_ref, child, target, visited)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=dfs.js.map