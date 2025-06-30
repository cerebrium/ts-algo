"use strict";
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
//
// Implement the LRUCache class:
//
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise,
// add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation,
// evict the least recently used key.
Object.defineProperty(exports, "__esModule", { value: true });
exports.lRUCache = void 0;
class lRUCache {
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.currentDataLength = 0;
        this.dataMap = new Map();
        this.capacity = capacity;
    }
    get(key) {
        const lNode = this.dataMap.get(key);
        if (!lNode) {
            return -1;
        }
        this.moveToFront(lNode);
        return lNode.value;
    }
    moveToFront(lNode) {
        if (this.currentDataLength < 2 || !lNode.prev) {
            return;
        }
        // Need to remove the prev link to it
        if (lNode.next && lNode.next.prev === lNode) {
            lNode.next.prev = lNode.prev;
        }
        // point prev of lnode to next of lnode
        lNode.prev.next = lNode.next;
        if (!lNode.prev.next) {
            this.tail = lNode.prev;
        }
        // point lnode next to head
        lNode.next = this.head;
        if (!this.head) {
            throw new Error('no head move to front');
        }
        this.head.prev = lNode;
        lNode.prev = null;
        // set current head as lnode
        this.head = lNode;
    }
    put(key, value) {
        const lNode = this.dataMap.get(key);
        if (lNode) {
            lNode.value = value;
            this.moveToFront(lNode);
            return null;
        }
        const newNode = this.createAndAppendNewNode(value, key);
        this.dataMap.set(key, newNode);
        // Evict if needed
        this.checkAndEvict();
        return null;
    }
    createAndAppendNewNode(value, key) {
        const node = new LinkedNode(value, key);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.currentDataLength++;
            return node;
        }
        // Make node head
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        // Check if old head needs to be tail
        if (!this.head.next) {
            this.tail = this.head.next;
        }
        this.currentDataLength++;
        return node;
    }
    checkAndEvict() {
        if (this.currentDataLength <= this.capacity) {
            return;
        }
        if (!this.tail) {
            throw new Error('no tail, and nodes past capacity error');
        }
        if (!this.tail.prev) {
            throw new Error('no tail.prev but at capacity');
        }
        this.dataMap.delete(this.tail.key);
        const newTail = this.tail.prev;
        this.tail = newTail;
        newTail.next = null;
        this.currentDataLength--;
    }
}
exports.lRUCache = lRUCache;
class LinkedNode {
    constructor(value, key, prev = null, next = null) {
        this.value = value;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}
//# sourceMappingURL=lru_cache.js.map