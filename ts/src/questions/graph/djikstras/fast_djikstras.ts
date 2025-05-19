/*
 *
 * We perform the normal djikstras calculations, however, we will
 * use a heap to see if there are any nodes to update.
 *
 */

import {DjikHeap} from './min_heap';

function djikstras_fast(graph: Array<number[][]>, target: number) {
  const min_heap = new DjikHeap();

  const path: number[] = new Array(graph.length).fill(-1);
  // We need to have 0 be 0
  for (let i = 0; i < graph.length; i++) {
    for (const [x] of graph[i]) {
      min_heap.add_node([x, Number.MAX_SAFE_INTEGER]);
    }
  }

  while (min_heap.has_nodes()) {
    const parent = min_heap.remove_node();
  }

  return create_path(target, path);
}

function create_path(target: number, path: number[]): number[] | null {
  if (path[target] === -1) {
    return null;
  }

  let curr_node = target;
  const final_list = [target];

  while (path[curr_node] !== -1) {
    final_list.push(path[curr_node]);
    curr_node = path[curr_node];
  }

  return final_list.reverse();
}
