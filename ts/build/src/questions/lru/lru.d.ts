import { DoublyLinkedList } from './doubly_linked_list';
export interface Entity {
    id: number;
    [key: string]: any;
}
export declare class LRU {
    cache: DoublyLinkedList<Entity>;
    constructor(first_item: Entity, length: number);
    add_item(item: Entity): void;
    retrieve_item(id: number): Entity | null;
}
