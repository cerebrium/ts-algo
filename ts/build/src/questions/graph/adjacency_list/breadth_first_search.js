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
function adj_list_bfs(data, target, start = 0) {
    const visited = new Set();
    const path = new Array(data.length).fill(-1);
    let curr_que_idx = 0;
    const que = [start];
    while (curr_que_idx < que.length) {
        // We visit on the child in bfs
        const parent = que[curr_que_idx];
        const children = data[parent];
        if (!children || !children.length) {
            curr_que_idx++;
            continue;
        }
        for (const [child, _] of children) {
            if (visited.has(child)) {
                continue;
            }
            visited.add(child);
            path[child] = parent;
            if (child === target) {
                break;
            }
            que.push(child);
        }
        curr_que_idx++;
    }
    return create_path(path, target);
}
exports.adj_list_bfs = adj_list_bfs;
function create_path(path, target) {
    if (path[target] === -1) {
        return null;
    }
    let curr_node = target;
    const final_path = [target];
    while (path[curr_node] !== -1) {
        final_path.push(path[curr_node]);
        curr_node = path[curr_node];
    }
    return final_path.reverse();
}
//# sourceMappingURL=breadth_first_search.js.map