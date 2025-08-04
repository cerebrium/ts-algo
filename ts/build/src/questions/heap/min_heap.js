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
    add(num) {
        this.data.push(num);
        return this.bubbleUp();
    }
    /*
     *
     * Look at the last value (just added), if it is
     * smaller than the parent, then swap.. Continue
     * process until reached smaller element or head
     *
     */
    bubbleUp() {
        if (this.data.length < 2) {
            return;
        }
        let currIdx = this.data.length - 1;
        let parentIdx = this.getParentIdx(currIdx);
        if (parentIdx < 0) {
            return;
        }
        while (this.data[currIdx] < this.data[parentIdx]) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = this.getParentIdx(currIdx);
            if (parentIdx < 0) {
                return;
            }
        }
    }
    pop() {
        if (!this.data.length) {
            return null;
        }
        const valToReturn = this.data[0];
        if (this.data.length === 1) {
            this.data.pop();
            return valToReturn;
        }
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return valToReturn;
    }
    /*
     *
     * Take the first value and compare it to its two
     * children. Whichever is smaller, if is is smaller
     * than current value, swap, and continue down until
     * the smallest child is larger than current element
     *
     */
    heapifyDown() {
        if (this.data.length < 2) {
            return;
        }
        let currIdx = 0;
        let smallestChildIdx = this.getSmallestChild(currIdx);
        if (smallestChildIdx < 0) {
            return;
        }
        while (this.data[smallestChildIdx] < this.data[currIdx]) {
            this.swap(smallestChildIdx, currIdx);
            currIdx = smallestChildIdx;
            smallestChildIdx = this.getSmallestChild(currIdx);
            if (smallestChildIdx < 0) {
                return;
            }
        }
    }
    getSmallestChild(idx) {
        const left = this.getLeftChildIdx(idx);
        const right = this.getRightChildIdx(idx);
        if (left < 0 && right < 0) {
            return -1;
        }
        if (left < 0) {
            return right;
        }
        if (right < 0) {
            return left;
        }
        return this.data[left] < this.data[right] ? left : right;
    }
    getParentIdx(idx) {
        const pParent = Math.floor((idx - 1) / 2);
        if (pParent < 0) {
            return -1;
        }
        return pParent;
    }
    getLeftChildIdx(idx) {
        const pLeftChild = Math.floor(idx * 2 + 1);
        if (pLeftChild > this.data.length - 1) {
            return -1;
        }
        return pLeftChild;
    }
    getRightChildIdx(idx) {
        const pRightChild = Math.floor(idx * 2 + 2);
        if (pRightChild > this.data.length - 1) {
            return -1;
        }
        return pRightChild;
    }
    swap(idxOne, idxTwo) {
        [this.data[idxOne], this.data[idxTwo]] = [
            this.data[idxTwo],
            this.data[idxOne],
        ];
    }
}
exports.MinHeap = MinHeap;
//# sourceMappingURL=min_heap.js.map