"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_cycles = void 0;
function find_cycles(graph) {
    let are_cycles = false;
    const visited = [];
    graph.forEach((_, key) => {
        if (are_cycles) {
            return;
        }
        if (walk(graph, key, visited)) {
            are_cycles = true;
        }
    });
    return are_cycles;
}
exports.find_cycles = find_cycles;
function walk(graph, curr_node, visited) {
    // pre
    if (visited.includes(curr_node)) {
        return true;
    }
    visited.push(curr_node);
    // recurse
    const children = graph.get(curr_node);
    for (const child of children) {
        if (walk(graph, child, visited)) {
            return true;
        }
    }
    // post
    visited.pop();
    return false;
}
//# sourceMappingURL=cycles.js.map