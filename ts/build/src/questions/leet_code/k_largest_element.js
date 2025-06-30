"use strict";
// Given an integer array nums and an integer k, return the kth largest element in the array.
//
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Can you solve it without sorting?
Object.defineProperty(exports, "__esModule", { value: true });
exports.k_largest_element = void 0;
function k_largest_element(nums, k) {
    if (!nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    const minHeap = new MaxHeap();
    for (let i = 0; i < nums.length; i++) {
        minHeap.push(nums[i]);
    }
    let answer = 0;
    let currentIterate = k;
    while (currentIterate > 0) {
        answer = minHeap.pop();
        currentIterate--;
    }
    if (answer === null) {
        throw new Error('no answer, heap has returned null');
    }
    return answer;
}
exports.k_largest_element = k_largest_element;
class MaxHeap {
    constructor() {
        this.data = [];
    }
    push(num) {
        this.data.push(num);
        if (this.data.length < 1) {
            return;
        }
        this.bubbleUp();
    }
    pop() {
        if (!this.data.length) {
            return null;
        }
        const valToReturn = this.data[0];
        if (this.data.length === 1) {
            this.data = [];
            return valToReturn;
        }
        const pVal = this.data.pop();
        this.data[0] = pVal;
        this.heapifyDown();
        return valToReturn;
    }
    heapifyDown() {
        let currNodeIdx = 0;
        let smallestChildIdx = this.getLargestChildIdx(currNodeIdx);
        if (smallestChildIdx < 0) {
            return;
        }
        while (this.data[smallestChildIdx] > this.data[currNodeIdx]) {
            this.swap(smallestChildIdx, currNodeIdx);
            currNodeIdx = smallestChildIdx;
            smallestChildIdx = this.getLargestChildIdx(currNodeIdx);
            if (smallestChildIdx < 0) {
                return;
            }
        }
    }
    bubbleUp() {
        let currNodeIdx = this.data.length - 1;
        let parentIdx = this.getParentIdx(currNodeIdx);
        if (parentIdx < 0) {
            return;
        }
        while (this.data[currNodeIdx] > this.data[parentIdx]) {
            this.swap(currNodeIdx, parentIdx);
            currNodeIdx = parentIdx;
            parentIdx = this.getParentIdx(currNodeIdx);
            if (parentIdx < 0) {
                return;
            }
        }
    }
    getLargestChildIdx(idx) {
        const leftIdx = this.getLeftChildIdx(idx);
        const rightIdx = this.getRightChildIdx(idx);
        if (leftIdx < 0 && rightIdx < 0) {
            return -1;
        }
        if (rightIdx < 0) {
            return leftIdx;
        }
        if (this.data[leftIdx] > this.data[rightIdx]) {
            return leftIdx;
        }
        return rightIdx;
    }
    getParentIdx(idx) {
        const potentialParentIdx = Math.floor((idx - 1) / 2);
        if (potentialParentIdx < 0) {
            return -1;
        }
        return potentialParentIdx;
    }
    getLeftChildIdx(idx) {
        const potentialLeftIdx = idx * 2 + 1;
        if (potentialLeftIdx > this.data.length - 1) {
            return -1;
        }
        return potentialLeftIdx;
    }
    getRightChildIdx(idx) {
        const potentialRightIdx = idx * 2 + 2;
        if (potentialRightIdx > this.data.length - 1) {
            return -1;
        }
        return potentialRightIdx;
    }
    swap(idxOne, idxTwo) {
        [this.data[idxOne], this.data[idxTwo]] = [
            this.data[idxTwo],
            this.data[idxOne],
        ];
    }
}
//# sourceMappingURL=k_largest_element.js.map