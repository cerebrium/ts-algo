interface DoublyLinkedNode<T> {
  id: number;
  value: T;
  prev: DoublyLinkedNode<T> | null;
  next: DoublyLinkedNode<T> | null;
}

export class DoublyLinkedList<T> {
  private head: DoublyLinkedNode<T> | null;
  private tail: DoublyLinkedNode<T> | null;
  private max_length: number;

  public id_map: WeakMap<Number, DoublyLinkedNode<T>>;
  public length: number;

  constructor(max_length: number) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.id_map = new WeakMap<Number, DoublyLinkedNode<T>>();
    this.max_length = max_length;
  }

  public push(value: T, id: number): void {
    this.length++;

    if (this.tail) {
      this.tail.next = {value, prev: this.tail, next: null, id};
      this.tail = this.tail.next;

      // This will just delete the node if it's oversized. Not a
      // needed method for this paticular implementation
      this.handle_new_value_map(id, this.tail);
      return;
    }

    // If no tail, no head either
    this.head = this.tail = {
      value,
      prev: this.tail,
      next: null,
      id,
    };

    this.handle_new_value_map(id, this.tail);
  }

  public unshift_and_create(value: T, id: number): void {
    this.length++;

    if (this.head) {
      this.head.prev = {value, prev: this.tail, next: null, id};
      this.head = this.head.prev;

      this.handle_new_value_map(id, this.head);
      return;
    }

    this.head = this.tail = {
      value,
      prev: this.tail,
      next: null,
      id,
    };

    this.handle_new_value_map(id, this.head);
  }

  public unshift(node: DoublyLinkedNode<T>): void {
    if (this.head) {
      node.next = this.head;
      this.head = node;

      this.handle_new_value_map(node.id, node);
      return;
    }

    this.head = this.tail = node;
    this.handle_new_value_map(node.id, node);
  }

  private pop(): T | null {
    if (!this.length) return null;
    this.length--;

    if (this.tail && this.tail.prev) {
      const node_value = this.tail.value;

      this.tail = this.tail.prev;
      this.tail.next = null;

      return node_value;
    }

    // If there was not tail, length check would fail
    // there is no prev, which means tail = head
    let node_value = this.tail?.value;
    this.tail = null;
    this.head = null;

    // This just makes ts happy
    return node_value ? node_value : null;
  }

  private shift(): T | null {
    if (!this.length) return null;
    this.length--;

    if (this.head && this.head.next) {
      const current_node = this.head.value;
      // gc will collect since previous head node has no pointers
      // to it.
      this.head = this.head.next;

      return current_node;
    }

    // If there was not tail, length check would fail
    // there is no prev, which means tail = head
    const node_value = this.head?.value;
    this.tail = null;
    this.head = null;

    // This just makes ts happy
    return node_value ? node_value : null;
  }

  private handle_new_value_map(
    id: number,
    new_node: DoublyLinkedNode<T>
  ): void {
    this.id_map.set(id, new_node);

    if (this.length > this.max_length) {
      // Need to remove the item from map
      // We know tail exists if the length is
      // greater than max lenght
      this.id_map.delete(this.tail?.id!);

      // Can null coerce due to above check.
      this.tail = this.tail?.prev!;
      this.tail.next = null;
    }
  }

  public retrieve_node(id: number): DoublyLinkedNode<T> | null {
    const node = this.id_map.get(id);

    if (!node) return null;

    // Remove from the weak map
    this.id_map.delete(id);

    // Need do detach the node
    if (this.head?.id !== node.id && this.tail?.id !== node.id) {
      node.prev = node.next;
      this.length--;
      return node;
    }

    if (this.head?.id === node.id) {
      if (this.length > 1) {
        this.head = this.head.next;
        this.length--;
        return node;
      }

      this.head = this.tail = null;
      this.length--;
      return node;
    }

    if (this.length > 1) {
      this.tail = this.tail?.prev!;
      this.length--;
      return node;
    }

    this.head = this.tail = null;
    this.length--;
    return node;
  }
}
