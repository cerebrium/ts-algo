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
        this.nodeMap = new Map();
        this.currNodeCount = 0;
        this.capacity = capacity;
    }
    get(key) {
        const hasNode = this.nodeMap.get(key);
        if (!hasNode) {
            return -1;
        }
        this.makeNodeHead(hasNode);
        return hasNode.value;
    }
    put(key, value) {
        const node = this.nodeMap.get(key);
        if (node) {
            node.value = value;
            this.makeNodeHead(node);
            return;
        }
        const newNode = new DLNode(key, value);
        this.nodeMap.set(key, newNode);
        this.currNodeCount++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.evictIfNeeded();
    }
    logNodes() {
        console.log('------------- START ----------------');
        let currNode = this.head;
        while (currNode) {
            console.log('key: ', currNode.key, '\nvalue: ', currNode.value, '\nnext: ', currNode.next, '\nprev: ', currNode.prev);
            currNode = currNode.next;
        }
        console.log('------------- END ----------------');
    }
    makeNodeHead(_node) {
        // Head
        if (_node === this.head) {
            return;
        }
        // Tail
        if (_node === this.tail) {
            if (!this.tail || !_node.prev || !this.head) {
                this.logNodes();
                throw new Error('IN THE TAIL');
            }
            _node.prev.next = undefined;
            this.tail = _node.prev;
            _node.prev = undefined;
            _node.next = this.head;
            this.head.prev = _node;
            this.head = _node;
            return;
        }
        // Middle
        if (!_node.next || !_node.prev || !this.head || !this.tail) {
            this.logNodes();
            throw new Error('ERROR IN MIDDLE');
        }
        _node.prev.next = _node.next;
        _node.next.prev = _node.prev;
        _node.prev = undefined;
        _node.next = this.head;
        this.head.prev = _node;
        this.head = _node;
    }
    evictIfNeeded() {
        if (this.currNodeCount <= this.capacity) {
            return;
        }
        if (!this.tail || !this.tail.prev || this.tail.next) {
            this.logNodes();
            throw new Error('EVICTION ERROR');
        }
        this.currNodeCount--;
        this.nodeMap.delete(this.tail.key);
        this.tail.prev.next = undefined;
        this.tail = this.tail.prev;
    }
}
exports.lRUCache = lRUCache;
class DLNode {
    constructor(key, value, next, prev) {
        this.key = key;
        this.value = value;
        if (next) {
            this.next = next;
        }
        if (prev) {
            this.prev = prev;
        }
    }
}
//# sourceMappingURL=lru_cache.js.map