"use strict";
/*
 *
 * We perform the normal djikstras calculations, however, we will
 * use a heap to see if there are any nodes to update.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.djikstras_fast = void 0;
const min_heap_1 = require("./min_heap");
function djikstras_fast(graph, target) {
    const min_heap = new min_heap_1.DjikHeap();
    const path = new Array(graph.length).fill(-1);
    const distances = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    min_heap.add_node([0, 0]);
    while (min_heap.has_nodes()) {
        const parent = min_heap.remove_node();
        if (!parent) {
            throw new Error('There is no parent');
        }
        const [p_idx, p_dist] = parent;
        if (p_dist > distances[p_idx]) {
            continue;
        }
        const children = graph[p_idx];
        if (!children || !children.length) {
            continue;
        }
        for (const [child, weight] of children) {
            const prospective_weight = distances[p_idx] + weight;
            if (distances[child] > prospective_weight) {
                distances[child] = prospective_weight;
                path[child] = p_idx;
                min_heap.add_node([child, distances[child]]);
            }
        }
    }
    return create_path(target, path);
}
exports.djikstras_fast = djikstras_fast;
function create_path(target, path) {
    if (path[target] === -1) {
        return null;
    }
    let curr_node = target;
    const final_list = [target];
    while (path[curr_node] !== -1) {
        final_list.push(path[curr_node]);
        curr_node = path[curr_node];
    }
    return final_list.reverse();
}
//# sourceMappingURL=fast_djikstras.js.map