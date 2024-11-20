"use strict";
/**
 *
 * djikstras is the shortest path algorithm for any graph where
 * each node has a non-negative weight.
 *
 * Go through using a breadth first traversal approach. Assign
 * a weight to the node on each element in the distance array. If
 * there is a shorter path (lower value) available then update the
 * distance array and the prev array to point toward the shortst
 * path for the previous node. This process needs to happen for all
 * nodes, when it does, then reverse path from the target node, and
 * find the shortest path.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.djikstras = void 0;
function djikstras(graph, target) {
    const visited = new Uint8Array(graph.length).fill(0);
    const prev = new Int8Array(graph.length).fill(-1);
    const distance = new Uint8Array(graph.length).fill(255); // max for int 8
    distance[0] = 0;
    while (_some(visited, distance)) {
        const lo = _get_lowest_u(visited, distance);
        visited[lo] = 1;
        /**
         *
         * Looping through children of unseen node, and finding
         * their weights
         *
         */
        for (let lo_edge_idx = 0; lo_edge_idx < graph[lo].length; lo_edge_idx++) {
            if (graph[lo][lo_edge_idx].length < 1)
                continue;
            const [lo_edge, weight] = graph[lo][lo_edge_idx];
            if (!!visited[lo_edge])
                continue;
            // Checking if the current weight + less than the previously
            // computed lowest weight to the current edge. If it is,
            // update the distance ledger to pont towards the new path.
            const dist = distance[lo] + weight;
            // If unvisited this will be 256, else, some value that
            // is the shortest distance to this point. We will be making
            // an array of shortest distances to each node based on the
            // previous node.
            if (dist < distance[lo_edge]) {
                distance[lo_edge] = dist;
                prev[lo_edge] = lo;
            }
        }
    }
    if (prev[target] === -1)
        return null;
    const shortest_path = [target];
    let curr_idx = target;
    while (prev[curr_idx] !== -1) {
        shortest_path.push(prev[curr_idx]);
        curr_idx = prev[curr_idx];
    }
    return shortest_path.reverse();
}
exports.djikstras = djikstras;
function _some(visited, distance) {
    for (let i = 0; i < visited.length; i++) {
        if ((visited[i] & 1) === 0 && distance[i] !== 255)
            return true;
    }
    return false;
}
/**
 *
 * We want to find the lowest remaining unvisited child of
 * whatever nodes have been visited.
 *
 */
function _get_lowest_u(visited, distance) {
    let curr_value = 257;
    let idx = 0;
    for (let i = 0; i < visited.length; ++i) {
        if (visited[i]) {
            continue;
        }
        if (curr_value > distance[i]) {
            curr_value = distance[i];
            idx = i;
        }
    }
    return idx;
}
/**
 *
 * For the more optimized version, we use a min heap
 *
 */
class MinHeap {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(val) {
        this.data.push(val);
        this.length++;
        return this._bubble_up();
    }
    _bubble_up() { }
    /**
     *
     * right: 2x + 2
     * left: 2x + 1
     * parent: (x-1) / 2
     *
     */
    _get_right_child(idx) {
        const right_child = 2 * idx + 2;
        return right_child > this.length ? null : right_child;
    }
    _get_left_child(idx) {
        const left_child = 2 * idx + 1;
        return left_child > this.length ? null : left_child;
    }
    _get_parent(idx) {
        const parent_idx = Math.floor((idx - 1) / 2);
        return parent_idx < 0 ? null : parent_idx;
    }
}
//# sourceMappingURL=djikstas.js.map