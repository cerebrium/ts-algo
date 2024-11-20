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
export declare function djikstras(graph: Array<number[][]>, target: number): null | number[];
