"use strict";
/*
 *
 * We perform the normal djikstras calculations, however, we will
 * use a heap to see if there are any nodes to update.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.djikstras_fast = void 0;
function djikstras_fast(graph, target) {
    const minHeap = new MinHeap();
    const path = new Array(graph.length).fill(-1);
    const weights = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    weights[0] = 0;
    minHeap.add([0, 0]);
    while (minHeap.has_node()) {
        const parent = minHeap.pop();
        const [pIdx, _] = parent;
        const children = graph[pIdx];
        if (!children || !children.length) {
            continue;
        }
        for (const [child, weight] of children) {
            const pWeight = weight + weights[pIdx];
            if (pWeight < weights[child]) {
                weights[child] = pWeight;
                path[child] = pIdx;
                minHeap.add([child, weight]);
            }
        }
    }
    return createFinalPath(target, path);
}
exports.djikstras_fast = djikstras_fast;
function createFinalPath(target, path) {
    if (path[target] === -1) {
        return null;
    }
    let currNode = target;
    const finalPath = [target];
    while (path[currNode] !== -1) {
        finalPath.push(path[currNode]);
        currNode = path[currNode];
    }
    return finalPath.reverse();
}
class MinHeap {
    constructor() {
        this.data = [];
    }
    add(child) {
        this.data.push(child);
        if (this.data.length < 2) {
            return;
        }
        this.bubbleUp();
    }
    bubbleUp() {
        let currIdx = this.data.length - 1;
        let parentIdx = this.getParentIdx(currIdx);
        if (parentIdx < 0) {
            return;
        }
        console.log('data: ', this.data, '\nparentIdx: ', parentIdx);
        while (this.data[currIdx][0] < this.data[parentIdx][0]) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = this.getParentIdx(currIdx);
            if (parentIdx < 0) {
                return;
            }
        }
    }
    has_node() {
        return !!this.data.length;
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
        this.data[0] = this.data.pop();
        if (this.data.length === 1) {
            return valToReturn;
        }
        this.heapifyDown();
        return valToReturn;
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
    getParentIdx(idx) {
        const prosParent = Math.floor((idx - 1) / 2);
        if (prosParent < 0) {
            return -1;
        }
        return prosParent;
    }
    getRightChild(idx) {
        const prosRight = idx * 2 + 2;
        if (prosRight > this.data.length - 1) {
            return -1;
        }
        return prosRight;
    }
    getLeftChild(idx) {
        const prosLeft = idx * 2 + 1;
        if (prosLeft > this.data.length - 1) {
            return -1;
        }
        return prosLeft;
    }
    getLowestChildIdx(idx) {
        const left = this.getLeftChild(idx);
        const right = this.getRightChild(idx);
        if (left < 0 && right < 0) {
            return -1;
        }
        if (left < 0) {
            return right;
        }
        if (right < 0) {
            return left;
        }
        return this.data[left][0] < this.data[right][0] ? left : right;
    }
    swap(curr, target) {
        [this.data[curr], this.data[target]] = [this.data[target], this.data[curr]];
    }
}
//# sourceMappingURL=fast_djikstras.js.map