// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
//
// Implement the LRUCache class:
//
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise,
// add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation,
// evict the least recently used key.

export class lRUCache {
  capacity: number;
  nodeMap: Map<number, DLNode> = new Map();
  currNodeCount: number = 0;
  head?: DLNode;
  tail?: DLNode;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public get(key: number): number {
    const foundNode = this.nodeMap.get(key);

    if (!foundNode) {
      return -1;
    }

    this.makeNodeHead(foundNode);
    return foundNode.value;
  }

  public put(key: number, value: number): void {
    const foundNode = this.nodeMap.get(key);

    if (foundNode) {
      foundNode.value = value;
      this.makeNodeHead(foundNode);
      return;
    }

    const newNode = new DLNode(key, value);
    this.currNodeCount++;
    this.nodeMap.set(key, newNode);

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

  public logNodes() {
    console.log('------------- START ----------------');
    let currNode = this.head;

    while (currNode) {
      console.log(
        'key: ',
        currNode.key,
        '\nvalue: ',
        currNode.value,
        '\nnext: ',
        currNode.next,
        '\nprev: ',
        currNode.prev
      );
      currNode = currNode.next;
    }
    console.log('------------- END ----------------');
  }

  private makeNodeHead(_node: DLNode): void {
    if (!this.head || !this.tail) {
      this.logNodes();
      throw new Error('makeNodeHead NO TAIL OR HEAD');
    }
    if (this.head === _node) {
      return;
    }

    // NODE IS TAIL
    if (this.tail === _node) {
      if (!this.tail.prev) {
        this.logNodes();
        throw new Error('IN TAIL MAKENODEHEAD NO TAIL OR PREV');
      }

      this.tail.prev.next = undefined;
      this.tail = this.tail.prev;

      _node.prev = undefined;
      _node.next = this.head;

      this.head.prev = _node;
      this.head = _node;
      return;
    }

    // NODE IS MIDDLE
    if (!_node.prev || !_node.next) {
      this.logNodes();
      throw new Error('MIDDLE OF makeNodeHead NO PREV');
    }

    _node.prev.next = _node.next;
    _node.next.prev = _node.prev;

    _node.next = this.head;
    _node.prev = undefined;

    this.head.prev = _node;
    this.head = _node;
  }
  private evictIfNeeded() {
    if (this.currNodeCount <= this.capacity) {
      return;
    }

    if (!this.tail || !this.tail.prev) {
      this.logNodes();
      throw new Error('EVICTION NO TAIL OR PREV');
    }

    this.nodeMap.delete(this.tail.key);

    this.currNodeCount--;

    this.tail.prev.next = undefined;
    this.tail = this.tail.prev;
  }
}

class DLNode {
  key: number;
  value: number;
  next?: DLNode;
  prev?: DLNode;

  constructor(key: number, value: number, next?: DLNode, prev?: DLNode) {
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
