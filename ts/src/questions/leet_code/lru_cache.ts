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
  head: LNode | null = null;
  tail: LNode | null = null;
  currentLength: number = 0;
  nodeMap: Map<number, LNode> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public put(key: number, value: number): void {
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

  public get(key: number): number {
    const node = this.nodeMap.get(key);

    if (node) {
      this.makeNodeHead(node);
      return node.value;
    }

    return -1;
  }

  public logNodes() {
    console.log('\n -------------- LOGGING -------------- \n');
    let currNode = this.head;

    while (currNode) {
      console.log(
        '\nkey: ',
        currNode.key,
        '|nvalue: ',
        currNode.value,
        '\nnext: ',
        currNode.next,
        '\nprev: ',
        currNode.prev
      );
      currNode = currNode.next;
    }

    console.log('\n -------------- END LOGGING -------------- \n');
  }

  private makeNodeHead(node: LNode) {
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
  private possibleEvict(): void {
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

class LNode {
  key: number;
  value: number;
  next: LNode | null = null;
  prev: LNode | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}
