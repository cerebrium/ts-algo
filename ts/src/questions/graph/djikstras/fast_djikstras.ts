/*
 *
 * We perform the normal djikstras calculations, however, we will
 * use a heap to see if there are any nodes to update.
 *
 */

export function djikstras_fast(graph: Array<number[][]>, target: number) {
  const minHeap = new MinHeap();
  const path: number[] = new Array(graph.length).fill(-1);
  const weights: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );
  weights[0] = 0;

  minHeap.add([0, 0]);

  while (minHeap.has_node()) {
    const parent = minHeap.pop()!;

    const [pIdx, _] = parent;
    const children = graph[pIdx];

    if (!children || !children.length) {
      continue;
    }

    for (const [child, weight] of children) {
      const pWeight = weight + weights[pIdx];

      if (pWeight < weights[child]) {
        weights[child] = pWeight;
        path[child] = pIdx;

        minHeap.add([child, weight]);
      }
    }
  }

  return createFinalPath(target, path);
}

function createFinalPath(target: number, path: number[]): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let currNode: number = target;
  const finalPath: number[] = [target];

  while (path[currNode] !== -1) {
    finalPath.push(path[currNode]);
    currNode = path[currNode];
  }

  return finalPath.reverse();
}

class MinHeap {
  data: Array<[number, number]>; // [weight, node]

  constructor() {
    this.data = [];
  }

  public add(child: [number, number]) {
    this.data.push(child);

    if (this.data.length < 2) {
      return;
    }

    this.bubbleUp();
  }
  private bubbleUp() {
    let currIdx: number = this.data.length - 1;
    let parentIdx: number = this.getParentIdx(currIdx);

    if (parentIdx < 0) {
      return;
    }

    console.log('data: ', this.data, '\nparentIdx: ', parentIdx);
    while (this.data[currIdx][0] < this.data[parentIdx][0]) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);

      if (parentIdx < 0) {
        return;
      }
    }
  }

  public has_node() {
    return !!this.data.length;
  }

  public pop(): null | [number, number] {
    if (!this.data.length) {
      return null;
    }

    const valToReturn = this.data[0];

    if (this.data.length === 1) {
      this.data = [];
      return valToReturn;
    }

    this.data[0] = this.data.pop()!;

    if (this.data.length === 1) {
      return valToReturn;
    }

    this.heapifyDown();

    return valToReturn;
  }
  private heapifyDown() {
    let currIdx: number = 0;
    let smallestChildIdx: number = this.getLowestChildIdx(currIdx);

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

  private getParentIdx(idx: number): number {
    const prosParent = Math.floor((idx - 1) / 2);

    if (prosParent < 0) {
      return -1;
    }

    return prosParent;
  }

  private getRightChild(idx: number): number {
    const prosRight = idx * 2 + 2;

    if (prosRight > this.data.length - 1) {
      return -1;
    }

    return prosRight;
  }

  private getLeftChild(idx: number): number {
    const prosLeft = idx * 2 + 1;

    if (prosLeft > this.data.length - 1) {
      return -1;
    }

    return prosLeft;
  }

  private getLowestChildIdx(idx: number): number {
    const left = this.getLeftChild(idx);
    const right = this.getRightChild(idx);

    if (left < 0 && right < 0) {
      return -1;
    }

    if (left < 0) {
      return right;
    }

    if (right < 0) {
      return left;
    }

    return this.data[left][0] < this.data[right][0] ? left : right;
  }

  private swap(curr: number, target: number): void {
    [this.data[curr], this.data[target]] = [this.data[target], this.data[curr]];
  }
}
