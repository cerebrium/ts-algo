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

  public add(node: T): void {
    return;
  }
  public pop(): T | null {
    return null;
  }

  private swap(idx_one: number, idx_two: number): void {
    [this.data[idx_one], this.data[idx_two]] = [
      this.data[idx_two],
      this.data[idx_one],
    ];
  }
}
