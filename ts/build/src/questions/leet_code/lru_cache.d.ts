export declare class lRUCache {
    capacity: number;
    nodeMap: Map<number, DLNode>;
    currNodeCount: number;
    head?: DLNode;
    tail?: DLNode;
    constructor(capacity: number);
    get(key: number): number;
    put(key: number, value: number): void;
    logNodes(): void;
    private makeNodeHead;
    private evictIfNeeded;
}
declare class DLNode {
    key: number;
    value: number;
    next?: DLNode;
    prev?: DLNode;
    constructor(key: number, value: number, next?: DLNode, prev?: DLNode);
}
export {};
