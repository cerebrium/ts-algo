"use strict";
/*
 *
 * Graphs are awesome! This one will be using an adjacency list
 * structure. The ahjacency list is one of the most commonly
 * used ways of representing a graph.
 *
 * [
 * [1]
 * [2]
 * [3]
 * [4]
 * [5]
 * [0]
 * ]
 *
 * The list above represents a circle. This is an unweighted
 * Graph though. The way to read an adjacency list is as follows:
 *
 * The index is the node
 * The values are the edges.
 *
 * The following represents a proper graph with weights.
 * [
 * [[1, 2], [4, 12]],
 * [[2, 4]]
 * [[3, 8]]
 * [[4, 9]]
 * [[5, 2]]
 * [[0, 4]]
 * ]
 *
 * This is the proper way to represent an adjacency list. The
 * index still represents the node, but at each node there
 * is an array of tuples which are its children. The children
 * are weighted. The first index is the location of the node,
 * the second index of the tuple is the weight of the edge.
 *
 * The above is a weighted graph of a circle, where the first (0)
 * node also has an edge to the fourth node.
 *
 * What we want to do in this algorith is to determine a path
 * from a given location, to a target (given) location. We
 * are not worried about weights yet, that will come up first
 * in the next algorithm which is an implementation of
 * djikstras.
 *
 * For this fuction, we will expect a path, represented as an
 * array of node values (numbers) from a starting point to
 * an ending pointlist: Array<number[]>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs = void 0;
class dfs {
    constructor({ list }) {
        this.target = -1;
        this.start = -1;
        this.list = list;
        this.visited = new Array(list.length).fill(-1);
    }
    traverse({ child, parent }) {
        if (parent !== undefined) {
            this.visited[child] = parent;
        }
        if (child === this.target) {
            return;
        }
        for (const [node, _] of this.list[child]) {
            if (this.visited[node] > 0) {
                continue;
            }
            this.traverse({ child: node, parent: child });
        }
    }
    create_path() {
        let curr = this.target; // Target was not found, but whole graph traversed
        const path = [];
        while (curr !== -1 && curr !== this.start) {
            path.push(this.visited[curr]);
            curr = this.visited[curr];
        }
        return path.reverse();
    }
    find_node({ start, target, }) {
        this.start = start;
        this.target = target;
        if (start < 0 || target < 0 || target >= this.list.length) {
            return [];
        }
        this.traverse({ child: this.start });
        return this.create_path();
    }
}
exports.dfs = dfs;
//# sourceMappingURL=dfs.js.map