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
  head: TNode | null = null;
  tail: TNode | null = null;
  currentNodeCount: number = 0;
  nodeMap: Map<number, TNode> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public put(key: number, value: number): void {
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

  public get(key: number): number {
    const hasNode = this.nodeMap.get(key);

    if (!hasNode) {
      return -1;
    }

    this.setNodeAsHead(hasNode);
    return hasNode.value;
  }

  public logNodes(_node: TNode | null = null) {
    let currNode = this.head;

    console.log('------------ start --------------');
    if (_node) {
      console.log('Middle Node: ', _node.key);
    }
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
    console.log('------------ end --------------');
  }

  private evictNode() {
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

  private setNodeAsHead(tNode: TNode): void {
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

class TNode {
  value: number;
  key: number;
  next: TNode | null;
  prev: TNode | null;

  constructor(
    key: number,
    value: number,
    next: TNode | null = null,
    prev: TNode | null = null
  ) {
    this.value = value;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}
