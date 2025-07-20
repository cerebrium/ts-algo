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
    while (visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)) {
        const parent = findLowestClosestChild(visited, distances);
        visited[parent] = true;
        for (const [child, weight] of graph[parent]) {
            const prospectiveReplacmentWeight = weight + distances[parent];
            if (distances[child] > prospectiveReplacmentWeight) {
                path[child] = parent;
                distances[child] = prospectiveReplacmentWeight;
            }
        }
    }
    return createFinalPath(path, target);
}
exports.djikstras = djikstras;
function findLowestClosestChild(visited, distances) {
    let idx = 0;
    let currMax = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] &&
            distances[i] !== Number.MAX_SAFE_INTEGER &&
            currMax > distances[i]) {
            currMax = distances[i];
            idx = i;
        }
    }
    return idx;
}
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
//# sourceMappingURL=djikstras.js.map