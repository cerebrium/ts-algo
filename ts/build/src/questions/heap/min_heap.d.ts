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
    add(num: number): void;
    private bubbleUp;
    pop(): number | null;
    private heapifyDown;
    private getSmallestChild;
    private getParentIdx;
    private getLeftChildIdx;
    private getRightChildIdx;
    private swap;
}
