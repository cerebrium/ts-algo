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
    add(node: T): void;
    pop(): T | null;
    private swap;
}
