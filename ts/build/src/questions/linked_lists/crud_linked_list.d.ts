export declare class LinkedNode {
    readonly val: number;
    next: LinkedNode | null;
    constructor(val: number, next?: LinkedNode | null);
}
export declare class LinkedList {
    head: LinkedNode | null;
    constructor(val: number);
    push(val: number): LinkedNode;
    unshift(val: number): LinkedNode;
    /**
     *
     * This method can error if there are no nodes.
     * This will return a reference to the instance
     * before the val is found. This is to make the
     * bulk delete work.
     */
    delete(val: number, target?: LinkedNode | null): LinkedNode | null;
    /**
     * This can error if there are no nodes.
     */
    delete_all(val: number): void;
    /**
     * If no node found, returns null. Otherwise the
     * found node.
     */
    find(val: number, target?: LinkedNode | null): LinkedNode | null;
    /**
     * If there are no nodes found, returns null.
     * Otherwise an array of found nodes.
     */
    find_all(val: number): Array<LinkedNode> | null;
    /**
     * If there is not one of the values in the LL
     * returns false. If successful, return true.
     */
    swap(val_one: number, val_two: number): boolean;
}
