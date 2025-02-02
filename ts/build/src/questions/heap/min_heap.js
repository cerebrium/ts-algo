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
    add(node) {
        return;
    }
    pop() {
        return null;
    }
    swap(idx_one, idx_two) {
        [this.data[idx_one], this.data[idx_two]] = [
            this.data[idx_two],
            this.data[idx_one],
        ];
    }
}
exports.MinHeap = MinHeap;
//# sourceMappingURL=min_heap.js.map