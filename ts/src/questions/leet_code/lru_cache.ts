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
  head: DLNode | null = null;
  tail: DLNode | null = null;
  nodeMap: Map<number, DLNode> = new Map();
  currentNodeLength: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public put(key: number, value: number) {
    const hasNode = this.nodeMap.get(key);

    if (hasNode) {
      hasNode.value = value;
      this.moveToHead(hasNode);
      return;
    }

    const newNode = new DLNode(key, value);
    this.currentNodeLength++;

    this.nodeMap.set(key, newNode);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      this.evictNode();
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.evictNode();
  }

  public get(key: number) {
    const hasNode = this.nodeMap.get(key);

    if (!hasNode) {
      return -1;
    }

    this.moveToHead(hasNode);
    return hasNode.value;
  }

  public logNodes() {
    let currNode = this.head;

    console.log('------------- start -----------------');
    while (currNode) {
      console.log(
        'key: ',
        currNode.key,
        '\nvalue: ',
        currNode.value,
        '\nnext: ',
        currNode.next?.key,
        '\nprev: ',
        currNode.prev?.key
      );
      currNode = currNode.next;
    }
    console.log('------------- end -----------------');
  }

  private evictNode(): void {
    if (this.currentNodeLength > this.capacity) {
      if (!this.tail || !this.tail.prev) {
        this.logNodes();
        throw new Error('EVICT NO TAIL OR PREV');
      }

      this.nodeMap.delete(this.tail.key);

      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  private moveToHead(dlNode: DLNode): void {
    // HEAD
    if (this.head === dlNode) {
      return;
    }

    if (!this.head) {
      throw new Error('NO HEAD IN MOVE TO HEAD');
    }

    // TAIL
    if (dlNode === this.tail) {
      if (!dlNode.prev) {
        this.logNodes();
        throw new Error('NO PREV AND IS TAIL');
      }

      dlNode.prev.next = null;
      this.tail = dlNode.prev;

      dlNode.next = this.head;
      this.head.prev = dlNode;

      this.head = dlNode;
      this.head.prev = null;

      return;
    }

    // MIDDLE
    if (!dlNode.prev || !dlNode.next) {
      this.logNodes();
      throw new Error('MIDDLE NO PREV OR NEXT');
    }

    dlNode.prev.next = dlNode.next;
    dlNode.next.prev = dlNode.prev;

    dlNode.next = this.head;
    this.head.prev = dlNode;

    dlNode.prev = null;

    this.head = dlNode;
  }
}

class DLNode {
  value: number;
  key: number;
  next: DLNode | null;
  prev: DLNode | null;

  constructor(
    key: number,
    value: number,
    next: DLNode | null = null,
    prev: DLNode | null = null
  ) {
    this.value = value;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}
