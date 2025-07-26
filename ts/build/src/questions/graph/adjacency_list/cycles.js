"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_cycles = void 0;
function find_cycles(graph) {
    let hasCycles = false;
    graph.forEach((_, k) => {
        if (hasCycles) {
            return;
        }
        const visited = [];
        const visitedSet = new Set();
        if (findCycle(graph, visited, k, visitedSet)) {
            hasCycles = true;
            return;
        }
    });
    return hasCycles;
}
exports.find_cycles = find_cycles;
function findCycle(graph, visited, node, visitedSet) {
    if (visited.includes(node)) {
        return true;
    }
    if (visitedSet.has(node)) {
        return false;
    }
    visited.push(node);
    visitedSet.add(node);
    // Recurse
    const children = graph.get(node);
    if (!children || !children.length) {
        return false;
    }
    for (const child of children) {
        if (findCycle(graph, visited, child, visitedSet)) {
            return true;
        }
    }
    visited.pop();
    return false;
}
//# sourceMappingURL=cycles.js.map