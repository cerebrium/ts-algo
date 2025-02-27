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

export class MinHeap {
  data: Array<number>;
  length: number;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  public add(node: number): void {
    this.data.push(node);

    if (this.data.length === 1) {
      return;
    }

    return this.bubble_up();
  }

  public pop(): number | null {
    if (this.data.length < 1) {
      return null;
    }

    let return_val = this.data[0];
    const new_head = this.data.pop();

    if (!new_head) {
      throw new Error('There is an issue with pop');
    }

    if (this.data.length < 1) {
      return return_val;
    }

    this.data[0] = new_head;
    this.heapify_down();

    return return_val;
  }

  private bubble_up() {
    let curr_idx = this.data.length - 1;
    let parent = this.find_parent_idx(curr_idx);

    while (parent !== null && this.data[parent] > this.data[curr_idx]) {
      this.swap(curr_idx, parent);

      curr_idx = parent;
      parent = this.find_parent_idx(curr_idx);
    }
  }

  private heapify_down() {
    let curr_idx = 0;
    let lowest_child = this.find_lowest_child_idx(curr_idx);

    while (
      lowest_child !== null &&
      this.data[lowest_child] < this.data[curr_idx]
    ) {
      this.swap(curr_idx, lowest_child);

      curr_idx = lowest_child;
      lowest_child = this.find_lowest_child_idx(curr_idx);
    }
  }

  private find_lowest_child_idx(idx: number): null | number {
    const left_child = this.find_left_child_idx(idx);
    const right_child = this.find_right_child_idx(idx);

    if (!left_child && !right_child) {
      return null;
    }

    if (!left_child) {
      return right_child;
    }

    if (!right_child) {
      return left_child;
    }

    if (this.data[left_child] < this.data[right_child]) {
      return left_child;
    }

    return right_child;
  }

  private find_parent_idx(idx: number): null | number {
    // We go up
    const proposed_parent_idx = Math.floor((idx - 1) / 2);

    if (proposed_parent_idx < 0) {
      return null;
    }

    return proposed_parent_idx;
  }
  private find_right_child_idx(idx: number) {
    const proposed_right_child_idx = idx * 2 + 2;
    if (proposed_right_child_idx > this.data.length - 1) {
      return null;
    }

    return proposed_right_child_idx;
  }

  private find_left_child_idx(idx: number) {
    const proposed_left_child_idx = idx * 2 + 1;
    if (proposed_left_child_idx > this.data.length - 1) {
      return null;
    }

    return proposed_left_child_idx;
  }
  private swap(x: number, y: number): void {
    [this.data[x], this.data[y]] = [this.data[y], this.data[x]];
  }
}
