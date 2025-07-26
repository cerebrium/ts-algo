// Given an array of points where points[i] = [xi, yi] represents a point on the
// X-Y plane and an integer k, return the k closest points to the origin (0, 0).
//
// The distance between two points on the X-Y plane is the Euclidean distance
// (i.e., √(x1 - x2)2 + (y1 - y2)2).
//
// You may return the answer in any order. The answer is guaranteed to be unique
// (except for the order that it is in).

/*
 *
 * Steps:
 * 1. Create a distance formula for getting distance from origin
 * 2. Create a minHeap that will take the tuples and the pre-calculated
 *    distances
 * 3. Return k items
 */
export function kClosest(points: number[][], k: number): number[][] {
  const minHeap = new MinHeap();

  for (let i = 0; i < points.length; i++) {
    minHeap.push(points[i]);
  }

  const kPoints: number[][] = [];

  while (k > 0) {
    kPoints.push(minHeap.pop() as number[]);
    k--;
  }

  return kPoints;
}

type HeapValues = [number, [number, number]];

class MinHeap {
  data: HeapValues[];

  constructor() {
    this.data = [];
  }

  public push(point: number[]) {
    const heapVal: [number, [number, number]] = [
      this.getDistanceFromOrigin(point as [number, number]),
      point as [number, number],
    ];

    this.data.push(heapVal);

    this.bubbleUp();
  }

  private bubbleUp(): void {
    if (this.data.length < 2) {
      return;
    }

    let currIdx = this.data.length - 1;
    let parentIdx = this.getParentIdx(currIdx);

    if (parentIdx < 0) {
      return;
    }

    while (this.data[currIdx][0] < this.data[parentIdx][0]) {
      this.swap(currIdx, parentIdx);

      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  public pop(): [number, number] | null {
    if (this.data.length === 0) {
      return null;
    }

    const val = this.data[0];
    if (this.data.length === 1) {
      this.data = [];
      return val[1];
    }

    this.data[0] = this.data.pop()!;

    this.heapifyDown();
    return val[1];
  }

  private heapifyDown(): void {
    let currIdx = 0;
    let smallestChildIdx = this.getLowestChildIdx(currIdx);

    if (smallestChildIdx < 0) {
      return;
    }

    while (this.data[smallestChildIdx][0] < this.data[currIdx][0]) {
      this.swap(smallestChildIdx, currIdx);

      currIdx = smallestChildIdx;
      smallestChildIdx = this.getLowestChildIdx(currIdx);

      if (smallestChildIdx < 0) {
        return;
      }
    }
  }

  private getDistanceFromOrigin(point: [number, number]): number {
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
  }

  private getLeftChildIdx(idx: number): number {
    const prospectiveChildIdx: number = idx * 2 + 1;

    if (prospectiveChildIdx > this.data.length - 1) {
      return -1;
    }

    return prospectiveChildIdx;
  }

  private getRightChildIdx(idx: number): number {
    const prospectiveChildIdx: number = idx * 2 + 2;

    if (prospectiveChildIdx > this.data.length - 1) {
      return -1;
    }

    return prospectiveChildIdx;
  }

  private getParentIdx(idx: number): number {
    const prospectiveParentIdx: number = Math.floor((idx - 1) / 2);

    if (prospectiveParentIdx < 0) {
      return -1;
    }

    return prospectiveParentIdx;
  }

  private getLowestChildIdx(idx: number): number {
    const leftChildIdx = this.getLeftChildIdx(idx);
    const rightChildIdx = this.getRightChildIdx(idx);

    if (leftChildIdx < 0 && rightChildIdx < 0) {
      return -1;
    }

    if (leftChildIdx < 0) {
      return rightChildIdx;
    }

    if (rightChildIdx < 0) {
      return leftChildIdx;
    }

    return this.data[leftChildIdx][0] < this.data[rightChildIdx][0]
      ? leftChildIdx
      : rightChildIdx;
  }

  private swap(idxOne: number, idxTwo: number): void {
    [this.data[idxOne], this.data[idxTwo]] = [
      this.data[idxTwo],
      this.data[idxOne],
    ];
  }
}
