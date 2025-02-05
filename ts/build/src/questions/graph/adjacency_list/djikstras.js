"use strict";
/*
 *
 * Djikstras is a breadth first search for a target node. It goes
 * out in concentric circles from the starting node. It gives
 * every node infinite weight, then fills in the smallest weights
 * as the nodes are traveresed. In the end the path to the target
 * node with the aggregate smallest weights is found.
 *
 * There is a more optimzed version of this that uses a heap
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.djikstras = void 0;
function djikstras(graph, target) {
    const visited = new Array(graph.length).fill(false);
    const path = new Array(graph.length).fill(-1);
    const distances = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    while (visited.some((v, i) => {
        return !v && distances[i] !== Number.MAX_SAFE_INTEGER;
    })) {
        const parent = get_lowest_close_child(visited, distances);
        visited[parent] = true;
        const children = graph[parent];
        for (const [child, weight] of children) {
            let prev_distance = weight + distances[parent];
            if (prev_distance < distances[child]) {
                distances[child] = prev_distance;
                path[child] = parent;
            }
        }
    }
    return create_path(target, path);
}
exports.djikstras = djikstras;
function get_lowest_close_child(visited, distances) {
    let idx = 0;
    let curr_low = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] && distances[i] !== Number.MAX_SAFE_INTEGER) {
            if (curr_low > distances[i]) {
                idx = i;
            }
        }
    }
    return idx;
}
function create_path(target, path) {
    if (path[target] === -1) {
        return null;
    }
    let curr_node = target;
    const final_path = [curr_node];
    while (path[curr_node] !== -1) {
        final_path.push(path[curr_node]);
        curr_node = path[curr_node];
    }
    return final_path.reverse();
}
//# sourceMappingURL=djikstras.js.map