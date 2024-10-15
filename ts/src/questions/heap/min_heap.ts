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
  }
  public pop(): T | null {
    return null;
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
      this.data[parent_idx] < this.data[current_node_idx]
    ) {
      this._swap(this.data[parent_idx], this.data[current_node_idx]);
    }
  }
  private _heapify_down(): void {}

  private _get_parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private _get_left_child(idx: number): number {
    return 2 * idx + 1;
  }
  private _get_right_child(idx: number): number {
    return 2 * idx + 2;
  }
  private _swap(node_one: T, node_two: T) {
    [node_one, node_two] = [node_two, node_one];
  }
}
