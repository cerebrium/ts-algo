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

  public add(num: number): void {
    this.data.push(num);
    return this.bubbleUp();
  }
  /*
   *
   * Look at the last value (just added), if it is
   * smaller than the parent, then swap.. Continue
   * process until reached smaller element or head
   *
   */
  private bubbleUp(): void {
    if (this.data.length < 2) {
      return;
    }

    let currIdx = this.data.length - 1;
    let parentIdx = this.getParentIdx(currIdx);

    if (parentIdx < 0) {
      return;
    }

    while (this.data[currIdx] < this.data[parentIdx]) {
      this.swap(currIdx, parentIdx);

      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  public pop(): number | null {
    if (!this.data.length) {
      return null;
    }

    const valToReturn = this.data[0];

    if (this.data.length === 1) {
      this.data.pop();
      return valToReturn;
    }

    this.data[0] = this.data.pop()!;

    this.heapifyDown();

    return valToReturn;
  }

  /*
   *
   * Take the first value and compare it to its two
   * children. Whichever is smaller, if is is smaller
   * than current value, swap, and continue down until
   * the smallest child is larger than current element
   *
   */
  private heapifyDown(): void {
    if (this.data.length < 2) {
      return;
    }

    let currIdx = 0;
    let smallestChildIdx = this.getSmallestChild(currIdx);

    if (smallestChildIdx < 0) {
      return;
    }

    while (this.data[smallestChildIdx] < this.data[currIdx]) {
      this.swap(smallestChildIdx, currIdx);

      currIdx = smallestChildIdx;
      smallestChildIdx = this.getSmallestChild(currIdx);

      if (smallestChildIdx < 0) {
        return;
      }
    }
  }

  private getSmallestChild(idx: number): number {
    const left = this.getLeftChildIdx(idx);
    const right = this.getRightChildIdx(idx);

    if (left < 0 && right < 0) {
      return -1;
    }

    if (left < 0) {
      return right;
    }

    if (right < 0) {
      return left;
    }

    return this.data[left] < this.data[right] ? left : right;
  }

  private getParentIdx(idx: number): number {
    const pParent = Math.floor((idx - 1) / 2);
    if (pParent < 0) {
      return -1;
    }

    return pParent;
  }

  private getLeftChildIdx(idx: number): number {
    const pLeftChild = Math.floor(idx * 2 + 1);

    if (pLeftChild > this.data.length - 1) {
      return -1;
    }

    return pLeftChild;
  }

  private getRightChildIdx(idx: number): number {
    const pRightChild = Math.floor(idx * 2 + 2);

    if (pRightChild > this.data.length - 1) {
      return -1;
    }

    return pRightChild;
  }

  private swap(idxOne: number, idxTwo: number): void {
    [this.data[idxOne], this.data[idxTwo]] = [
      this.data[idxTwo],
      this.data[idxOne],
    ];
  }
}
