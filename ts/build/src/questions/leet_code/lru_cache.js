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
        this.currentNodeCount = 0;
        this.nodeMap = new Map();
        this.capacity = capacity;
    }
    put(key, value) {
        const hasNode = this.nodeMap.get(key);
        if (hasNode) {
            hasNode.value = value;
            this.setNodeAsHead(hasNode);
            return;
        }
        const newNode = new TNode(key, value);
        this.currentNodeCount++;
        this.nodeMap.set(key, newNode);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.evictNode();
    }
    get(key) {
        const hasNode = this.nodeMap.get(key);
        if (!hasNode) {
            return -1;
        }
        this.setNodeAsHead(hasNode);
        return hasNode.value;
    }
    logNodes(_node = null) {
        var _a, _b;
        let currNode = this.head;
        console.log('------------ start --------------');
        if (_node) {
            console.log('Middle Node: ', _node.key);
        }
        while (currNode) {
            console.log('key: ', currNode.key, '\nvalue: ', currNode.value, '\nnext: ', (_a = currNode.next) === null || _a === void 0 ? void 0 : _a.key, '\nprev: ', (_b = currNode.prev) === null || _b === void 0 ? void 0 : _b.key);
            currNode = currNode.next;
        }
        console.log('------------ end --------------');
    }
    evictNode() {
        if (this.currentNodeCount <= this.capacity) {
            return;
        }
        if (!this.tail || !this.tail.prev) {
            this.logNodes();
            throw new Error('in evict no tail or no tail prev');
        }
        this.nodeMap.delete(this.tail.key);
        const newTail = this.tail.prev;
        this.tail.prev = null;
        this.tail = newTail;
        this.tail.next = null;
    }
    setNodeAsHead(tNode) {
        // Head
        if (tNode === this.head) {
            return;
        }
        // Tail
        if (tNode === this.tail) {
            if (!tNode.prev) {
                this.logNodes();
                throw new Error('setNodeAsHead tail section no prev');
            }
            tNode.prev.next = null;
            this.tail = tNode.prev;
            if (!this.head) {
                this.logNodes();
                throw new Error('setNodeAsHead tail section no head');
            }
            tNode.next = this.head;
            this.head.prev = tNode;
            this.head = tNode;
            return;
        }
        if (!tNode.next || !tNode.prev || !this.head) {
            this.logNodes(tNode);
            throw new Error('setNodeAsHead middle section next or prev or no head');
        }
        // Middle
        tNode.prev.next = tNode.next;
        tNode.next.prev = tNode.prev;
        tNode.prev = null;
        tNode.next = this.head;
        this.head.prev = tNode;
        this.head = tNode;
    }
}
exports.lRUCache = lRUCache;
class TNode {
    constructor(key, value, next = null, prev = null) {
        this.value = value;
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
}
//# sourceMappingURL=lru_cache.js.map