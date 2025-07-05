export declare class lRUCache {
    capacity: number;
    head: DLNode | null;
    tail: DLNode | null;
    nodeMap: Map<number, DLNode>;
    currentNodeLength: number;
    constructor(capacity: number);
    put(key: number, value: number): void;
    get(key: number): number;
    logNodes(): void;
    private evictNode;
    private moveToHead;
}
declare class DLNode {
    value: number;
    key: number;
    next: DLNode | null;
    prev: DLNode | null;
    constructor(key: number, value: number, next?: DLNode | null, prev?: DLNode | null);
}
export {};
