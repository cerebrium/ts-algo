"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_cycles = void 0;
function find_cycles(graph) {
    let are_cycles = false;
    graph.forEach((_, key) => {
        if (are_cycles) {
            return;
        }
        const visited = [];
        if (has_cycles(graph, key, visited)) {
            are_cycles = true;
            return;
        }
    });
    return are_cycles;
}
exports.find_cycles = find_cycles;
function has_cycles(graph, key, visited) {
    if (visited.includes(key)) {
        return true;
    }
    visited.push(key);
    const children = graph.get(key);
    for (const child of children) {
        if (has_cycles(graph, child, visited)) {
            return true;
        }
    }
    visited.pop();
    return false;
}
//# sourceMappingURL=cycles.js.map