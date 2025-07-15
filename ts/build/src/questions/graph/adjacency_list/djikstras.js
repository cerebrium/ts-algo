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
    const path = new Array(graph.length).fill(-1);
    const distances = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    const visited = new Array(graph.length).fill(false);
    while (visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)) {
        const parent = getLowestClosestChild(visited, distances);
        const children = graph[parent];
        visited[parent] = true;
        for (const [child, weight] of children) {
            const prospectiveValue = distances[parent] + weight;
            if (prospectiveValue < distances[child]) {
                path[child] = parent;
                distances[child] = prospectiveValue;
            }
        }
    }
    return createFinalPath(path, target);
}
exports.djikstras = djikstras;
function getLowestClosestChild(visited, distances) {
    let idx = 0;
    let currMax = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] &&
            distances[i] !== Number.MAX_SAFE_INTEGER &&
            distances[i] < currMax) {
            idx = i;
            currMax = distances[i];
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