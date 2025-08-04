export declare class lRUCache {
    capacity: number;
    head: LNode | null;
    tail: LNode | null;
    currentLength: number;
    nodeMap: Map<number, LNode>;
    constructor(capacity: number);
    put(key: number, value: number): void;
    get(key: number): number;
    logNodes(): void;
    private makeNodeHead;
    private possibleEvict;
}
declare class LNode {
    key: number;
    value: number;
    next: LNode | null;
    prev: LNode | null;
    constructor(key: number, value: number);
}
export {};
