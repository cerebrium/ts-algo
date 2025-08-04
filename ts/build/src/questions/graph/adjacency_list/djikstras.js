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
    const visited = new Array(graph.length).fill(false);
    const weights = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    weights[0] = 0;
    while (visited.some((v, idx) => !v && weights[idx] !== Number.MAX_SAFE_INTEGER)) {
        const parent = findLowestClosestNode(weights, visited);
        visited[parent] = true;
        const children = graph[parent];
        if (!children || !children.length) {
            continue;
        }
        for (const [child, weight] of children) {
            const prospectiveWeight = weights[parent] + weight;
            if (weights[child] > prospectiveWeight) {
                path[child] = parent;
                weights[child] = prospectiveWeight;
            }
        }
    }
    return createFinalPath(target, path);
}
exports.djikstras = djikstras;
function findLowestClosestNode(weights, visited) {
    let idx = 0;
    let currWeight = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i] &&
            weights[i] !== Number.MAX_SAFE_INTEGER &&
            weights[i] < currWeight) {
            idx = i;
            currWeight = weights[i];
        }
    }
    return idx;
}
function createFinalPath(target, path) {
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