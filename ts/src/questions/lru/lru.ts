import {DoublyLinkedList} from './doubly_linked_list';

export interface Entity {
  id: number;
  [key: string]: any;
}

export class LRU {
  cache: DoublyLinkedList<Entity>;

  constructor(first_item: Entity, length: number) {
    if (length < 3) {
      throw new Error('LRU length must be greater than 3');
    }

    this.cache = new DoublyLinkedList<Entity>(length);
    this.cache.unshift_and_create(first_item, first_item.id);
  }

  public add_item(item: Entity): void {
    const cached_item = this.cache.retrieve_node(item.id);

    if (cached_item) {
      this.cache.unshift_and_create(item, item.id);
      return;
    }

    this.cache.unshift_and_create(item, item.id);
  }

  public retrieve_item(id: number): Entity | null {
    const cached_item = this.cache.retrieve_node(id);

    if (!cached_item) return null;
    this.cache.unshift(cached_item);

    return cached_item.value;
  }
}
