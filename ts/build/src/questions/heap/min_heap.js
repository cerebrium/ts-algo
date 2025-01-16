"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
class MinHeap {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    /**
     *
     * @param node
     * 1. Add the node to the end of the data
     * 2. updated length
     *
     */
    add(node) {
        return;
    }
    pop() {
        return null;
    }
    /**
     *
     * Called when adding a node
     * steps:
     * 1. get parent
     *   a. If parent larger -> swap -> continue
     *   b. If parent smaller or equal -> exit
     *
     */
    _bubble_up() { }
    /**
     *
     * Take the last node, put it at the top. From there, compare
     * each left and right branch, whichever is smaller compare to
     * current node, if smaller -> swap.
     *
     * repeat down the tree until placed wherever it needs to be.
     *
     */
    _heapify_down() { }
    _get_parent(idx) {
        return 0;
    }
    _get_left_child(idx) {
        return null;
    }
    _get_right_child(idx) {
        return null;
    }
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
    _get_bounded_lesser_child(idx) {
        return null;
    }
    _swap(node_one, node_two) { }
}
exports.MinHeap = MinHeap;
//# sourceMappingURL=min_heap.js.map