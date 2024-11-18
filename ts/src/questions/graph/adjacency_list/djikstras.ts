/**
 *
 * djikstras is the shortest path algorithm for any graph where
 * each node has a non-negative weight.
 *
 * Go through using a breadth first traversal approach. Assign
 * a weight to the node on each element in the distance array. If
 * there is a shorter path (lower value) available then update the
 * distance array and the prev array to point toward the shortst
 * path for the previous node. This process needs to happen for all
 * nodes, when it does, then reverse path from the target node, and
 * find the shortest path.
 */

export function djikstras(graph: Array<number[][]>, target: number) {
  const visited = new Uint8Array(graph.length).fill(0);
  const prev = new Int8Array(graph.length).fill(-1);
  const distance = new Uint8Array(graph.length).fill(256); // max for int 8

  visited[0] = 1;
  distance[0] = 0;
  distance[target] = 0;

  while (_some(visited)) {
    const lo = _get_lowest_u(distance);
  }
}

function _some(arr: Uint8Array): boolean {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 0) return true;
  }
  return false;
}

function _get_lowest_u(arr: Uint8Array) {
  let curr_value = 257;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < curr_value) {
      curr_value = arr[i];
    }
  }

  return curr_value;
}

/**
 *
 * For the more optimized version, we use a min heap
 *
 */

class MinHeap {
  data: number[];
  length: number;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  public push(val: number): void {
    this.data.push(val);
    this.length++;

    return this._bubble_up();
  }

  _bubble_up(): void {}

  /**
   *
   * right: 2x + 2
   * left: 2x + 1
   * parent: (x-1) / 2
   *
   */
  private _get_right_child(idx: number): number | null {
    const right_child = 2 * idx + 2;
    return right_child > this.length ? null : right_child;
  }
  private _get_left_child(idx: number): number | null {
    const left_child = 2 * idx + 1;
    return left_child > this.length ? null : left_child;
  }
  private _get_parent(idx: number): number | null {
    const parent_idx = Math.floor((idx - 1) / 2);
    return parent_idx < 0 ? null : parent_idx;
  }
}
