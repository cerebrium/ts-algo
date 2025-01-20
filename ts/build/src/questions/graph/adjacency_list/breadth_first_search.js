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
    const visited = new Array(data.length).fill(false);
    const path = new Array(data.length).fill(-1);
    let curr_que_idx = 0;
    const que = [start];
    while (curr_que_idx < que.length) {
        const parent = que[curr_que_idx];
        const children = data[parent];
        for (const [child, _] of children) {
            if (visited[child]) {
                continue;
            }
            visited[child] = true;
            path[child] = parent;
            if (child === target) {
                curr_que_idx = que.length + 1;
                break;
            }
            que.push(child);
        }
        curr_que_idx++;
    }
    return create_final_path(path, target);
}
exports.adj_list_bfs = adj_list_bfs;
function create_final_path(path, target) {
    if (path[target] === -1) {
        return null;
    }
    let current_node = target;
    const final_arr = [current_node];
    while (path[current_node] !== -1) {
        final_arr.push(path[current_node]);
        current_node = path[current_node];
    }
    return final_arr.reverse();
}
//# sourceMappingURL=breadth_first_search.js.map