/*
 *
 * For fast djikstras, we need to be able to have a min heap that
 * handles objects, and their node values. Additionally, we need
 * to be able to update the distances of the values based off
 * their index in the graph.
 *
 * left-child: 2x+1
 * right-child: 2x+2
 * parent: (x-1)/2
 *
 * Updating the values is not relevant. But is nice to have an
 * implementation sitting around, so will leave it.
 *
 */

export type DjikNode = number[]; // [node_idx, distance]
export type DjikMap = Map<number, number>; // graph_node: heap_idx

export class DjikHeap {
  public data: DjikNode[] = [];
  private map: DjikMap = new Map();

  public has_nodes() {
    return !!this.data.length;
  }

  /*
   *
   * We need to add the value to the end of the data. Then
   * bubble it up as far as it needs to go.
   *
   *
   */
  public add_node(node: number[]) {
    const [node_idx, weight] = node;
    const djikNode: DjikNode = [node_idx, weight];
    this.map.set(node_idx, this.data.length);
    this.data.push(djikNode);

    if (this.data.length === 1) {
      return;
    }

    this.bubble_up();
  }

  public check_and_update_weight(node: number, weight: number): boolean {
    const heap_idx = this.map.get(node);

    if (typeof heap_idx !== 'number') {
      throw new Error('updating node that does not exist');
    }

    if (heap_idx > this.data.length - 1) {
      return false;
    }

    const previous_weight = this.data[heap_idx][1];

    if (weight > previous_weight) {
      return false;
    }

    this.data[heap_idx][1] = weight;
    this.bubble_up(heap_idx);
    return true;
  }

  /*
   *
   * We take the last node of the data. We then
   * compare it to its parent, if the value of our
   * node is less than the parent, we swap them.
   *
   */
  private bubble_up(idx: number | null = null): void {
    let bub_idx = idx ? idx : this.data.length - 1;
    let parent_idx = this.get_parent_idx(bub_idx);

    if (typeof parent_idx !== 'number') {
      return;
    }

    while (this.data[bub_idx][1] < this.data[parent_idx][1]) {
      this.swap(bub_idx, parent_idx);
      // The node to compare is now at the parent_idx idx

      bub_idx = parent_idx;
      parent_idx = this.get_parent_idx(bub_idx);

      if (typeof parent_idx !== 'number') {
        return;
      }
    }
  }

  /*
   *
   * This is special, if the value of the node is infinite, then
   * we don't want to remove the node.
   *
   */
  public remove_node() {
    if (!this.data.length) {
      return null;
    }

    if (this.data[0][1] === Number.MAX_SAFE_INTEGER) {
      return null;
    }

    let val_to_return = this.data[0];

    if (this.data.length === 1) {
      return this.data.pop();
    }

    this.data[0] = this.data.pop()!;

    if (this.data.length === 1) {
      return val_to_return;
    }

    this.heapify_down();
    return val_to_return;
  }

  private heapify_down(idx: number | null = null): void {
    let curr_node_idx = idx ? idx : 0;
    let lowest_child_idx = this.get_lowest_child(curr_node_idx);

    if (typeof lowest_child_idx !== 'number') {
      return;
    }

    while (this.data[curr_node_idx][1] > this.data[lowest_child_idx][1]) {
      this.swap(curr_node_idx, lowest_child_idx);
      // lowest child is now the node to compare
      curr_node_idx = lowest_child_idx;
      lowest_child_idx = this.get_lowest_child(curr_node_idx);

      if (typeof lowest_child_idx !== 'number') {
        return;
      }
    }
  }

  private get_lowest_child(idx: number) {
    const left_child = this.get_left_child_idx(idx);
    const right_child = this.get_right_child_idx(idx);

    if (!left_child && !right_child) {
      return null;
    }

    if (!left_child) {
      return right_child;
    }

    if (!right_child) {
      return left_child;
    }

    return this.data[left_child][1] > this.data[right_child][1]
      ? right_child
      : left_child;
  }

  private get_left_child_idx(idx: number) {
    const child_idx = idx * 2 + 1;

    if (child_idx > this.data.length - 1) {
      return null;
    }

    return child_idx;
  }

  private get_right_child_idx(idx: number) {
    const child_idx = idx * 2 + 2;

    if (child_idx > this.data.length - 1) {
      return null;
    }

    return child_idx;
  }

  private get_parent_idx(idx: number) {
    const parent_idx = Math.floor((idx - 1) / 2);

    if (parent_idx < 0) {
      return null;
    }

    return parent_idx;
  }

  private swap(idx_one: number, idx_two: number): void {
    // Update the map idx
    const node_one = this.map.get(this.data[idx_one][0]);
    const node_two = this.map.get(this.data[idx_two][0]);

    if (typeof node_one !== 'number' || typeof node_two !== 'number') {
      throw new Error('Map is broken on swap');
    }

    this.map.set(node_one, idx_two);
    this.map.set(node_two, idx_one);

    // Swap
    [this.data[idx_one], this.data[idx_two]] = [
      this.data[idx_two],
      this.data[idx_one],
    ];
  }
}
