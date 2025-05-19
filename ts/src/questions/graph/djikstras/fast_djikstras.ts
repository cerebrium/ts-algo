/*
 *
 * We perform the normal djikstras calculations, however, we will
 * use a heap to see if there are any nodes to update.
 *
 */

import {DjikHeap} from './min_heap';

export function djikstras_fast(graph: Array<number[][]>, target: number) {
  const min_heap = new DjikHeap();
  const path: number[] = new Array(graph.length).fill(-1);
  const distances: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );
  distances[0] = 0;
  const visited: Set<number> = new Set();

  min_heap.add_node([0, 0]);

  while (min_heap.has_nodes()) {
    const parent = min_heap.remove_node();

    if (!parent) {
      break;
    }

    visited.add(parent[0]);

    const children = graph[parent[0]];
    for (const [child, weight] of children) {
      if (!child) {
        continue;
      }

      const prospective_weight = weight + parent[1];
      if (prospective_weight < distances[child]) {
        distances[child] = prospective_weight;
        path[child] = parent[0];
      }

      if (!visited.has(child)) {
        min_heap.add_node([child, distances[child]]);
      }
    }
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
