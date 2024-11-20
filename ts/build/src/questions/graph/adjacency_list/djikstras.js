"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.djikstras = void 0;
function djikstras(graph, target) {
    const distance = new Uint8Array(graph.length).fill(255);
    const visited = new Uint8Array(graph.length).fill(0);
    const prev = new Int8Array(graph.length).fill(-1);
    distance[0] = 0;
    while (visited.some((v, i) => !v && distance[i] !== 255)) {
        const current_lo = _lowest_close_child(distance, visited);
        console.log('running:', current_lo);
        visited[current_lo] = 1;
        for (let i = 0; i < graph[current_lo].length; i++) {
            const [edge, weight] = graph[current_lo][i];
            const prev_distance = weight + distance[current_lo];
            if (prev_distance < distance[edge]) {
                prev[edge] = current_lo;
                distance[edge] = prev_distance;
            }
        }
    }
    if (prev[target] === -1)
        return [];
    const path = [target];
    let current_node = prev[target];
    while (current_node !== -1) {
        path.push(current_node);
        current_node = prev[current_node];
    }
    return path.reverse();
}
exports.djikstras = djikstras;
function _lowest_close_child(distance, visited) {
    let idx = 0;
    let current_lo = 255;
    for (let i = 0; i < visited.length; i++) {
        if (visited[i] || distance[i] === 255)
            continue;
        if (current_lo > distance[i]) {
            current_lo = distance[i];
            idx = i;
        }
    }
    return idx;
}
//# sourceMappingURL=djikstras.js.map