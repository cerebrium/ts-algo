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
declare function djikstras(graph: Array<number[][]>, target: number): null | number[];
declare function _some(visited: Uint8Array, distance: Uint8Array): boolean;
/**
 *
 * We want to find the lowest remaining unvisited child of
 * whatever nodes have been visited.
 *
 */
declare function _get_lowest_u(visited: Uint8Array, distance: Uint8Array): number;
/**
 *
 * For the more optimized version, we use a min heap
 *
 */
declare class MinHeap {
    data: number[];
    length: number;
    constructor();
    push(val: number): void;
    _bubble_up(): void;
    /**
     *
     * right: 2x + 2
     * left: 2x + 1
     * parent: (x-1) / 2
     *
     */
    private _get_right_child;
    private _get_left_child;
    private _get_parent;
}
