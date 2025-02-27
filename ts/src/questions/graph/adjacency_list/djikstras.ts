/*
 *
 * Djikstras is a breadth first search for a target node. It goes
 * out in concentric circles from the starting node. It gives
 * every node infinite weight, then fills in the smallest weights
 * as the nodes are traveresed. In the end the path to the target
 * node with the aggregate smallest weights is found.
 *
 * There is a more optimzed version of this that uses a heap
 *
 */

export function djikstras(
  graph: Array<number[][]>,
  target: number
): null | number[] {
  const path: number[] = new Array(graph.length).fill(-1);
  const visited: boolean[] = new Array(graph.length).fill(false);
  const distances: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );

  // So we have somewhere to start
  distances[0] = 0;

  while (
    visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)
  ) {
    const parent = find_lowest_closest_child(visited, distances);
    visited[parent] = true;

    const children = graph[parent];

    for (const [child, weight] of children) {
      let proposed_weight = distances[parent] + weight;

      if (proposed_weight < distances[child]) {
        path[child] = parent;
        distances[child] = proposed_weight;
      }
    }
  }

  return create_path(path, target);
}

function find_lowest_closest_child(visited: boolean[], distances: number[]) {
  let idx = 0;
  let curr_min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] || distances[i] === Number.MAX_SAFE_INTEGER) {
      continue;
    }

    if (distances[i] < curr_min) {
      curr_min = distances[i];
      idx = i;
    }
  }

  return idx;
}

function create_path(path: number[], target: number): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let curr_node = target;
  const final_path: number[] = [target];
  while (path[curr_node] !== -1) {
    final_path.push(path[curr_node]);
    curr_node = path[curr_node];
  }

  return final_path.reverse();
}
