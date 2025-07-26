"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaximumEatenDishCount = void 0;
// There are N dishes in a row on a kaiten belt, with the ith dish being of type D . Some dishes may be of the same type as one another. i
// You're very hungry, but you'd also like to keep things interesting.
// The dishes will arrive in front of you, one after another in order,
// and for each one you'll eat it as long as it
// isn't the same type as any of the previous dishes you've eaten.
// You eat very fast, so you can consume a dish before the next one gets to you. Any dishes you choose not
// to eat as they pass will be eaten by others.
// N
// K
// Determine how many dishes you'll end up eating.
// Please take care to write a solution which runs within the time limit.
/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
    // Write your code here
    let eaten = 0;
    const lru = new LRU(K);
    for (let i = 0; i < N; i++) {
        const shouldAdd = lru.push(D[i]);
        if (shouldAdd) {
            eaten++;
        }
    }
    return eaten;
}
exports.getMaximumEatenDishCount = getMaximumEatenDishCount;
class TNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRU {
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.dataCount = new Map();
        this.nodeCount = 0;
        this.capacity = capacity;
    }
    push(value) {
        const hasNode = this.dataCount.get(value);
        if (hasNode) {
            this.makeNodeHead(hasNode);
            return false;
        }
        const newNode = new TNode(value);
        this.dataCount.set(value, newNode);
        this.nodeCount++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.evict();
        return true;
    }
    logNodes() {
        console.log('----------------- start ------------------');
        let currNode = this.head;
        while (currNode) {
            console.log('value: ', currNode.value, '\nnext: ', currNode.next, '\nprev: ', currNode.prev);
            currNode = currNode.next;
        }
        console.log('----------------- end ------------------');
    }
    evict() {
        if (this.nodeCount <= this.capacity) {
            return;
        }
        if (!this.tail || !this.tail.prev) {
            throw new Error('EVICT NO TAIL');
        }
        this.dataCount.delete(this.tail.value);
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.nodeCount--;
    }
    makeNodeHead(node) {
        if (node === this.head) {
            return;
        }
        if (node === this.tail) {
            if (!this.tail.prev || !this.tail.prev || !this.head) {
                throw new Error('NO HEAD OR PREV IN MAKE HEAD');
            }
            this.tail.prev.next = null;
            this.tail.next = this.head;
            this.head.prev = this.tail;
            this.head = this.tail;
            this.tail = this.tail.prev;
            this.head.prev = null;
            return;
        }
        // Middle node
        if (!node.prev || !node.next || !this.tail || !this.head) {
            throw new Error('MIDDLE NOT CORRECT POINTERS');
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = this.head;
        this.head.prev = node;
        node.prev = null;
        this.head = node;
    }
}
//# sourceMappingURL=kaitensushi.js.map