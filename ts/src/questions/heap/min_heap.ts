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
    return;
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
  private _bubble_up(): void {}
  /**
   *
   * Take the last node, put it at the top. From there, compare
   * each left and right branch, whichever is smaller compare to
   * current node, if smaller -> swap.
   *
   * repeat down the tree until placed wherever it needs to be.
   *
   */
  private _heapify_down(): void {}

  private _get_parent(idx: number): number {
    return 0;
  }
  private _get_left_child(idx: number): number | null {
    return null;
  }
  private _get_right_child(idx: number): number | null {
    return null;
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
    return null;
  }
  private _swap(node_one: number, node_two: number) {}
}
