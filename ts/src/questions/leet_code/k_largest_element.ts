// Given an integer array nums and an integer k, return the kth largest element in the array.
//
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Can you solve it without sorting?

export function k_largest_element(nums: number[], k: number): number {
  if (!nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const minHeap = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
  }

  let answer: null | number = 0;

  let currentIterate = k;
  while (currentIterate > 0) {
    answer = minHeap.pop();
    currentIterate--;
  }

  if (answer === null) {
    throw new Error('no answer, heap has returned null');
  }

  return answer;
}

class MaxHeap {
  data: number[] = [];
  constructor() {}

  public push(num: number) {
    this.data.push(num);

    if (this.data.length < 1) {
      return;
    }

    this.bubbleUp();
  }
  public pop(): number | null {
    if (!this.data.length) {
      return null;
    }

    const valToReturn = this.data[0];

    if (this.data.length === 1) {
      this.data = [];
      return valToReturn;
    }

    const pVal = this.data.pop()!;

    this.data[0] = pVal;
    this.heapifyDown();

    return valToReturn;
  }

  private heapifyDown() {
    let currNodeIdx = 0;
    let smallestChildIdx = this.getLargestChildIdx(currNodeIdx);

    if (smallestChildIdx < 0) {
      return;
    }

    while (this.data[smallestChildIdx] > this.data[currNodeIdx]) {
      this.swap(smallestChildIdx, currNodeIdx);

      currNodeIdx = smallestChildIdx;
      smallestChildIdx = this.getLargestChildIdx(currNodeIdx);

      if (smallestChildIdx < 0) {
        return;
      }
    }
  }

  private bubbleUp() {
    let currNodeIdx = this.data.length - 1;
    let parentIdx = this.getParentIdx(currNodeIdx);

    if (parentIdx < 0) {
      return;
    }

    while (this.data[currNodeIdx] > this.data[parentIdx]) {
      this.swap(currNodeIdx, parentIdx);

      currNodeIdx = parentIdx;
      parentIdx = this.getParentIdx(currNodeIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  private getLargestChildIdx(idx: number): number {
    const leftIdx = this.getLeftChildIdx(idx);
    const rightIdx = this.getRightChildIdx(idx);

    if (leftIdx < 0 && rightIdx < 0) {
      return -1;
    }

    if (rightIdx < 0) {
      return leftIdx;
    }

    if (this.data[leftIdx] > this.data[rightIdx]) {
      return leftIdx;
    }

    return rightIdx;
  }

  private getParentIdx(idx: number): number {
    const potentialParentIdx = Math.floor((idx - 1) / 2);

    if (potentialParentIdx < 0) {
      return -1;
    }

    return potentialParentIdx;
  }

  private getLeftChildIdx(idx: number): number {
    const potentialLeftIdx = idx * 2 + 1;

    if (potentialLeftIdx > this.data.length - 1) {
      return -1;
    }

    return potentialLeftIdx;
  }

  private getRightChildIdx(idx: number): number {
    const potentialRightIdx = idx * 2 + 2;

    if (potentialRightIdx > this.data.length - 1) {
      return -1;
    }

    return potentialRightIdx;
  }
  private swap(idxOne: number, idxTwo: number): void {
    [this.data[idxOne], this.data[idxTwo]] = [
      this.data[idxTwo],
      this.data[idxOne],
    ];
  }
}
