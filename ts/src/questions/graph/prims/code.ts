class Primms<T> {
  heap = new MinHeap();
  adjacency_list: Map<string, Array<[string, number]>> = new Map();
  min_spanning_tree: Array<string> = []; // "parent|child|weight"
  current_visited: Array<[string, string, number]> = []; // parent, child, weight

  public init(data: string[]) {
    this.adjacency_list = new Map();

    // Construct the adjacency_list
    for (let i = 0; i < data.length; i++) {
      const [parent, child, weight] = data[i].split('|');
      if (this.adjacency_list.has(parent)) {
        const updated_child_list = this.adjacency_list.get(parent)!; // The if makes this exist
        updated_child_list.push([child, parseInt(weight)]);

        this.adjacency_list.set(parent, updated_child_list);
        continue;
      }

      this.adjacency_list.set(parent, [[child, parseInt(weight)]]);
    }
  }

  // primms
  public find_min_spanning_tree(starting_node: string) {
    if (!this.adjacency_list.has(starting_node)) {
      throw new Error('Starting node not in graph');
    }

    let current_node = this.adjacency_list.get(starting_node)!;

    return this.min_spanning_tree;
  }
}

/*
 *
 * Three Formula:
 *
 * 1. (i-1) / 2
 * 2. 2i
 * 3. 2i + 1
 *
 * This needs to be in indexed heap (priority indexed queue)
 */
class MinHeap {
  heap: Array<[string, number]> = [];
  length: number = 0;
  indexes: Map<string, number> = new Map();

  // We want to add all the nodes values
  // with indexes and infinite values
  public init(initial_data: string[]) {}

  public push(new_node: [string, number]) {
    this.heap.push(new_node);
    ++this.length;

    return this.bubble_up();
  }

  // Remove the top node, then rebalance the tree
  public pop(): null | [string, number] {
    if (!this.length) {
      return null;
    }

    const node_to_return = this.heap[0];

    // Simple case
    if (this.length === 1) {
      this.length = 0;
      this.heap = [];
      return node_to_return;
    }

    // Take the largest value and put it
    // at the top.
    const top_node = this.heap.pop()!;
    this.heap[0] = top_node;
    --this.length;

    this.heapify_down();

    return node_to_return;
  }

  private heapify_down() {
    if (this.length < 2) {
      return;
    }

    let current_idx = 0;
    let min_child = this.get_min_child(current_idx);

    if (!min_child) {
      return;
    }

    while (this.heap[current_idx][1] > this.heap[min_child][1]) {
      this.swap(current_idx, min_child);

      current_idx = min_child;
      min_child = this.get_left_child_idx(current_idx);

      if (!min_child) {
        break;
      }
    }
  }
  private bubble_up() {
    if (this.length < 2) {
      return;
    }

    let current_node_idx = this.length - 1;
    let current_node_parent_idx = this.get_parent_idx(current_node_idx);

    if (!current_node_parent_idx) {
      throw new Error('bubble up has broken get parent logic.');
    }

    while (
      this.heap[current_node_idx][1] < this.heap[current_node_parent_idx][1]
    ) {
      // swap the two
      this.swap(current_node_idx, current_node_parent_idx);

      // set current to parent, and continue
      current_node_idx = current_node_parent_idx;
      current_node_parent_idx = this.get_parent_idx(current_node_idx);

      if (!current_node_parent_idx) {
        break;
      }
    }
  }

  // 2i + 1
  private get_left_child_idx(idx: number): null | number {
    const left_child = 2 * idx;
    if (left_child > this.length - 1) {
      return null;
    }

    return left_child;
  }

  // 2i + 2
  private get_right_child_idx(idx: number): null | number {
    const right_child = 2 * idx + 1;
    if (right_child > this.length - 1) {
      return null;
    }

    return right_child;
  }

  private get_parent_idx(idx: number): null | number {
    if (!idx || !this.heap[idx]) {
      return null;
    }

    // (i - 1) / 2
    const parent_idx = Math.min((idx - 1) / 2);

    if (parent_idx < 0) {
      return null;
    }

    return parent_idx;
  }

  private get_min_child(idx: number): null | number {
    const left_child = this.get_left_child_idx(idx);
    const right_child = this.get_right_child_idx(idx);

    if (!left_child && !right_child) {
      return null;
    }

    if (!left_child) return right_child;
    if (!right_child) return left_child;

    return left_child < right_child ? left_child : right_child;
  }

  private swap(idx_one: number, idx_two: number) {
    [this.heap[idx_one], this.heap[idx_two]] = [
      this.heap[idx_two],
      this.heap[idx_one],
    ];
  }
}

export const primms = new Primms();
