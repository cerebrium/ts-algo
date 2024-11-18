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
exports.adj_list_bfs = void 0;
function adj_list_bfs(data, target) {
    if (!data.length) {
        return null;
    }
    const parent_refs = new Array(data.length).fill(-1);
    const visited = new Array(data.length).fill(false);
    visited[0] = true;
    /**
     *
     * Traverse all available children
     * save the parent into the value of
     * the parent_refs.
     *
     * save the bool into the visited at
     * index of element.
     *
     */
    let que = [0];
    let current_idx = 0;
    let found_node = false;
    // FIXME: The current_idx is not the correct parent index,
    // the parent index (especially in terminal nodes)
    while (current_idx < que.length && !found_node) {
        const current_node = que[current_idx];
        const current_connections = data[current_node];
        for (let i = 0; i < current_connections.length; i++) {
            const current_child = current_connections[i][0];
            if (!current_child) {
                continue;
            }
            // Check for target
            if (current_child === target) {
                // Add parent
                parent_refs[current_child] = current_node;
                found_node = true;
                break;
            }
            // Add Children
            if (visited[current_child]) {
                continue;
            }
            // Add seen and traceback
            visited[current_child] = true;
            // Add parent
            parent_refs[current_child] = current_node;
            que.push(current_child);
        }
        current_idx++;
    }
    if (parent_refs[target] === -1) {
        return null;
    }
    // Create path
    const path = [target];
    let current_node = target;
    let inner = 0;
    while (parent_refs[current_node] !== 0) {
        inner++;
        if (inner > 15) {
            break;
        }
        path.push(parent_refs[current_node]);
        current_node = parent_refs[current_node];
    }
    path.push(0);
    return path.reverse();
}
exports.adj_list_bfs = adj_list_bfs;
//# sourceMappingURL=breadth_first_search.js.map