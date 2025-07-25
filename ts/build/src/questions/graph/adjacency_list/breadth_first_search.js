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
    const path = new Array(data.length).fill(-1);
    const visited = new Set();
    let idx = 0;
    const que = [start];
    while (idx < que.length) {
        const parent = que[idx];
        const children = data[parent];
        if (!children || !children.length) {
            idx++;
            continue;
        }
        for (const [child, _] of children) {
            if (visited.has(child)) {
                continue;
            }
            visited.add(child);
            path[child] = parent;
            if (child === target) {
                idx = que.length + 1;
                break;
            }
            que.push(child);
        }
        idx++;
    }
    return createFinalPath(path, target);
}
exports.adj_list_bfs = adj_list_bfs;
function createFinalPath(path, target) {
    if (path[target] === -1) {
        return null;
    }
    let currNode = target;
    const finalPath = [target];
    while (path[currNode] !== -1) {
        finalPath.push(path[currNode]);
        currNode = path[currNode];
    }
    return finalPath.reverse();
}
//# sourceMappingURL=breadth_first_search.js.map