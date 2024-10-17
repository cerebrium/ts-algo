/**
 *
 * Implement a min heap
 *
 * Three Formula:
 * 1. (i-1) / 2
 * 2. 2i + 1
 * 3. 2i + 2
 *
 */

export class MinHeap<T> {
  data: Array<T>;
  length: number;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  /**
   *
   * @param node
   * 1. Add the node to the end of the data
   * 2. updated length
   *
   */
  public add(node: T): void {
    this.data.push(node);
    this.length++;

    this._bubble_up();
    return;
  }
  public pop(): T | null {
    if (!this.length) {
      return null;
    }
    const node_to_return = this.data[0];

    // handle edge case of length 1
    if (this.length === 1) {
      this.length = 0;
      this.data = [];
      return node_to_return;
    }

    // Due to the above edge case handling,
    // and the 0 length check, pop always
    // gives a value.
    const new_head = this.data.pop() as T;
    this.data[0] = new_head;
    this.length--;

    this._heapify_down();

    return node_to_return;
  }

  /**
   *
   * Called when adding a node
   * steps:
   * 1. get parent
   *   a. If parent larger -> swap -> continue
   *   b. If parent smaller or equal -> exit
   *
   */
  private _bubble_up(): void {
    let current_node_idx = this.length - 1;
    let parent_idx = this._get_parent(this.length - 1);

    while (
      parent_idx >= 0 &&
      this.data[parent_idx] > this.data[current_node_idx]
    ) {
      this._swap(parent_idx, current_node_idx);
      current_node_idx = parent_idx;
      parent_idx = this._get_parent(parent_idx);
    }
  }
  /**
   *
   * Take the last node, put it at the top. From there, compare
   * each left and right branch, whichever is smaller compare to
   * current node, if smaller -> swap.
   *
   * repeat down the tree until placed wherever it needs to be.
   *
   */
  private _heapify_down(): void {
    let node_idx = 0;
    let lesser_child_node = this._get_bounded_lesser_child(0);
    let node = this.data[0];

    while (lesser_child_node && node > lesser_child_node[0]) {
      this._swap(lesser_child_node[1], node_idx);
      node_idx = lesser_child_node[1];
      node = this.data[node_idx];
      lesser_child_node = this._get_bounded_lesser_child(lesser_child_node[1]);
    }
  }

  private _get_parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private _get_left_child(idx: number): number | null {
    const left_child_index = 2 * idx + 1;
    if (left_child_index > this.length - 1) {
      return null;
    }

    return left_child_index;
  }
  private _get_right_child(idx: number): number | null {
    const right_child_index = 2 * idx + 2;
    if (right_child_index > this.length - 1) {
      return null;
    }

    return right_child_index;
  }
  /**
   *
   * @param idx: number
   * @returns [Node, Index of node] | null
   *
   * @description This finds the lesser of the two possible children
   * nodes. Then returns it, and its index. If no children, it
   * returns null.
   *
   */
  private _get_bounded_lesser_child(idx: number): [T, number] | null {
    let left_child = this._get_left_child(idx);
    let right_child = this._get_right_child(idx);

    if (!left_child && !right_child) {
      return null;
    }

    if (left_child && right_child) {
      return this.data[left_child] < this.data[right_child]
        ? [this.data[left_child], left_child]
        : [this.data[right_child], right_child];
    }

    if (left_child) {
      return [this.data[left_child], left_child];
    }

    // This has to exist since neither, both, left have been
    // handled.
    return [this.data[right_child as number], right_child as number];
  }
  private _swap(node_one: number, node_two: number) {
    [this.data[node_one], this.data[node_two]] = [
      this.data[node_two],
      this.data[node_one],
    ];
  }
}
