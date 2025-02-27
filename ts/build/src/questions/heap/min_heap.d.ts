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
export declare class MinHeap {
    data: Array<number>;
    length: number;
    constructor();
    add(node: number): void;
    pop(): number | null;
    private bubble_up;
    private heapify_down;
    private find_lowest_child_idx;
    private find_parent_idx;
    private find_right_child_idx;
    private find_left_child_idx;
    private swap;
}
