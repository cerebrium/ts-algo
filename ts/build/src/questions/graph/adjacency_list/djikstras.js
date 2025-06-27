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
    const distances = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    const path = new Array(graph.length).fill(-1);
    let x = 0;
    console.log('before');
    while (visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)) {
        x++;
        if (x > 10) {
            console.log('insitde the while');
            return null;
        }
        const parent = find_lowest_closest_child(visited, distances);
        console.log('what is the parent: ', parent);
        visited[parent] = true;
        const children = graph[parent];
        for (const [child, weight] of children) {
            const prospective_replacment = weight + distances[parent];
            if (prospective_replacment < distances[child]) {
                distances[child] = prospective_replacment;
                path[child] = parent;
            }
        }
    }
    return create_final_list(path, target);
}
exports.djikstras = djikstras;
function find_lowest_closest_child(visited, distances) {
    let idx = 0;
    let curr_low = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] &&
            distances[i] !== Number.MAX_SAFE_INTEGER &&
            curr_low > distances[i]) {
            curr_low = distances[i];
            idx = i;
        }
    }
    return idx;
}
function create_final_list(path, target) {
    if (path[target] === -1) {
        return null;
    }
    let curr_idx = target;
    const final_path = [curr_idx];
    while (path[curr_idx] !== -1) {
        final_path.push(path[curr_idx]);
        curr_idx = path[curr_idx];
    }
    return final_path.reverse();
}
//# sourceMappingURL=djikstras.js.map