/**
 *
 * Implement a min heap
 *
 * Three Formula:
 * 1. (i-1) / 2
 * 2. 2i + 1
 * 3. 2i + 2
 *
 */
export declare class MinHeap<T> {
    data: Array<T>;
    length: number;
    constructor();
    /**
     *
     * @param node
     * 1. Add the node to the end of the data
     * 2. updated length
     *
     */
    add(node: T): void;
    pop(): T | null;
    /**
     *
     * Called when adding a node
     * steps:
     * 1. get parent
     *   a. If parent larger -> swap -> continue
     *   b. If parent smaller or equal -> exit
     *
     */
    private _bubble_up;
    /**
     *
     * Take the last node, put it at the top. From there, compare
     * each left and right branch, whichever is smaller compare to
     * current node, if smaller -> swap.
     *
     * repeat down the tree until placed wherever it needs to be.
     *
     */
    private _heapify_down;
    private _get_parent;
    private _get_left_child;
    private _get_right_child;
    /**
     *
     * @param idx: number
     * @returns [Node, Index of node] | null
     *
     * @description This finds the lesser of the two possible children
     * nodes. Then returns it, and its index. If no children, it
     * returns null.
     *
     */
    private _get_bounded_lesser_child;
    private _swap;
}
