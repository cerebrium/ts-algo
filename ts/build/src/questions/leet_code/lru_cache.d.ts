export declare class lRUCache {
    capacity: number;
    head: LinkedNode<number> | null;
    tail: LinkedNode<number> | null;
    currentDataLength: number;
    dataMap: Map<number, LinkedNode<number>>;
    constructor(capacity: number);
    get(key: number): number;
    private moveToFront;
    put(key: number, value: number): null;
    private createAndAppendNewNode;
    private checkAndEvict;
}
declare class LinkedNode<T> {
    value: T;
    key: number;
    prev: LinkedNode<T> | null;
    next: LinkedNode<T> | null;
    constructor(value: T, key: number, prev?: LinkedNode<T> | null, next?: LinkedNode<T> | null);
}
export {};
