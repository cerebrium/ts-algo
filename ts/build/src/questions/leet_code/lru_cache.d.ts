export declare class lRUCache {
    capacity: number;
    head: TNode | null;
    tail: TNode | null;
    currentNodeCount: number;
    nodeMap: Map<number, TNode>;
    constructor(capacity: number);
    put(key: number, value: number): void;
    get(key: number): number;
    logNodes(_node?: TNode | null): void;
    private evictNode;
    private setNodeAsHead;
}
declare class TNode {
    value: number;
    key: number;
    next: TNode | null;
    prev: TNode | null;
    constructor(key: number, value: number, next?: TNode | null, prev?: TNode | null);
}
export {};
