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
        this.currentLength = 0;
        this.nodeMap = new Map();
        this.capacity = capacity;
    }
    put(key, value) {
        // has node
        const node = this.nodeMap.get(key);
        if (node) {
            node.value = value;
            this.makeNodeHead(node);
            return;
        }
        const newNode = new LNode(key, value);
        this.nodeMap.set(key, newNode);
        this.currentLength++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this.possibleEvict();
    }
    get(key) {
        const node = this.nodeMap.get(key);
        if (node) {
            this.makeNodeHead(node);
            return node.value;
        }
        return -1;
    }
    logNodes() {
        console.log('\n -------------- LOGGING -------------- \n');
        let currNode = this.head;
        while (currNode) {
            console.log('\nkey: ', currNode.key, '|nvalue: ', currNode.value, '\nnext: ', currNode.next, '\nprev: ', currNode.prev);
            currNode = currNode.next;
        }
        console.log('\n -------------- END LOGGING -------------- \n');
    }
    makeNodeHead(node) {
        // If head
        if (node === this.head) {
            return;
        }
        // If tail
        if (node === this.tail) {
            if (!node.prev || !this.head) {
                this.logNodes();
                throw new Error('IN TAIL NO HEAD OR PREV');
            }
            // prev
            node.prev.next = null;
            this.tail = node.prev;
            node.prev = null;
            // head
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return;
        }
        // If middle
        if (!this.head || !this.tail || !node.prev || !node.next) {
            this.logNodes();
            throw new Error('MIDDLE ERROR WITH NODE');
        }
        // middle
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        // head
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return;
    }
    possibleEvict() {
        if (this.currentLength <= this.capacity) {
            return;
        }
        if (!this.tail || !this.tail.prev) {
            this.logNodes();
            throw new Error('IN EVICT TAIL ISSUE');
        }
        // evict from map
        this.nodeMap.delete(this.tail.key);
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    }
}
exports.lRUCache = lRUCache;
class LNode {
    constructor(key, value) {
        this.next = null;
        this.prev = null;
        this.key = key;
        this.value = value;
    }
}
//# sourceMappingURL=lru_cache.js.map