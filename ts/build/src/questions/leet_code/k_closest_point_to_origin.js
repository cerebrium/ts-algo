"use strict";
// Given an array of points where points[i] = [xi, yi] represents a point on the
// X-Y plane and an integer k, return the k closest points to the origin (0, 0).
//
// The distance between two points on the X-Y plane is the Euclidean distance
// (i.e., √(x1 - x2)2 + (y1 - y2)2).
//
// You may return the answer in any order. The answer is guaranteed to be unique
// (except for the order that it is in).
Object.defineProperty(exports, "__esModule", { value: true });
exports.kClosest = void 0;
/*
 *
 * Steps:
 * 1. Create a distance formula for getting distance from origin
 * 2. Create a minHeap that will take the tuples and the pre-calculated
 *    distances
 * 3. Return k items
 */
function kClosest(points, k) {
    const minHeap = new MinHeap();
    for (let i = 0; i < points.length; i++) {
        minHeap.push(points[i]);
    }
    const kPoints = [];
    while (k > 0) {
        kPoints.push(minHeap.pop());
        k--;
    }
    return kPoints;
}
exports.kClosest = kClosest;
class MinHeap {
    constructor() {
        this.data = [];
    }
    push(point) {
        const heapVal = [
            this.getDistanceFromOrigin(point),
            point,
        ];
        this.data.push(heapVal);
        this.bubbleUp();
    }
    bubbleUp() {
        if (this.data.length < 2) {
            return;
        }
        let currIdx = this.data.length - 1;
        let parentIdx = this.getParentIdx(currIdx);
        if (parentIdx < 0) {
            return;
        }
        while (this.data[currIdx][0] < this.data[parentIdx][0]) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = this.getParentIdx(currIdx);
            if (parentIdx < 0) {
                return;
            }
        }
    }
    pop() {
        if (this.data.length === 0) {
            return null;
        }
        const val = this.data[0];
        if (this.data.length === 1) {
            this.data = [];
            return val[1];
        }
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return val[1];
    }
    heapifyDown() {
        let currIdx = 0;
        let smallestChildIdx = this.getLowestChildIdx(currIdx);
        if (smallestChildIdx < 0) {
            return;
        }
        while (this.data[smallestChildIdx][0] < this.data[currIdx][0]) {
            this.swap(smallestChildIdx, currIdx);
            currIdx = smallestChildIdx;
            smallestChildIdx = this.getLowestChildIdx(currIdx);
            if (smallestChildIdx < 0) {
                return;
            }
        }
    }
    getDistanceFromOrigin(point) {
        return Math.pow(point[0], 2) + Math.pow(point[1], 2);
    }
    getLeftChildIdx(idx) {
        const prospectiveChildIdx = idx * 2 + 1;
        if (prospectiveChildIdx > this.data.length - 1) {
            return -1;
        }
        return prospectiveChildIdx;
    }
    getRightChildIdx(idx) {
        const prospectiveChildIdx = idx * 2 + 2;
        if (prospectiveChildIdx > this.data.length - 1) {
            return -1;
        }
        return prospectiveChildIdx;
    }
    getParentIdx(idx) {
        const prospectiveParentIdx = Math.floor((idx - 1) / 2);
        if (prospectiveParentIdx < 0) {
            return -1;
        }
        return prospectiveParentIdx;
    }
    getLowestChildIdx(idx) {
        const leftChildIdx = this.getLeftChildIdx(idx);
        const rightChildIdx = this.getRightChildIdx(idx);
        if (leftChildIdx < 0 && rightChildIdx < 0) {
            return -1;
        }
        if (leftChildIdx < 0) {
            return rightChildIdx;
        }
        if (rightChildIdx < 0) {
            return leftChildIdx;
        }
        return this.data[leftChildIdx][0] < this.data[rightChildIdx][0]
            ? leftChildIdx
            : rightChildIdx;
    }
    swap(idxOne, idxTwo) {
        [this.data[idxOne], this.data[idxTwo]] = [
            this.data[idxTwo],
            this.data[idxOne],
        ];
    }
}
//# sourceMappingURL=k_closest_point_to_origin.js.map