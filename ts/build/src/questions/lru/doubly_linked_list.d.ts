interface DoublyLinkedNode<T> {
    id: number;
    value: T;
    prev: DoublyLinkedNode<T> | null;
    next: DoublyLinkedNode<T> | null;
}
export declare class DoublyLinkedList<T> {
    private head;
    private tail;
    private max_length;
    id_map: WeakMap<Number, DoublyLinkedNode<T>>;
    length: number;
    constructor(max_length: number);
    push(value: T, id: number): void;
    unshift_and_create(value: T, id: number): void;
    unshift(node: DoublyLinkedNode<T>): void;
    private pop;
    private shift;
    private handle_new_value_map;
    retrieve_node(id: number): DoublyLinkedNode<T> | null;
}
export {};
