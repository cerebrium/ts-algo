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
  const distance: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );
  distance[0] = 0;

  const visited: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = new Array(graph.length).fill(-1);

  while (
    visited.some((v, idx) => {
      return !v && distance[idx] !== Number.MAX_SAFE_INTEGER;
    })
  ) {
    const parent = get_lowest_close_child(visited, distance);

    visited[parent] = true;
    // Get childs children
    const children = graph[parent];
    for (const [child, weight] of children) {
      // Get the currently computed least weighted path
      const prev_distance = weight + distance[parent];

      if (prev_distance < distance[child]) {
        path[child] = parent;
        distance[child] = prev_distance;
      }
    }
  }

  return create_path(path, target);
}

function get_lowest_close_child(
  visited: boolean[],
  distance: number[]
): number {
  let idx = 0;
  let curr_low = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < visited.length; i++) {
    // Is visited or is too far away (not a child)
    if (visited[i] || distance[i] === Number.MAX_SAFE_INTEGER) {
      continue;
    }

    if (distance[i] < curr_low) {
      curr_low = distance[i];
      idx = i;
    }
  }

  return idx;
}

function create_path(path: number[], target: number): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let curr_node: number = target;
  const final_path: number[] = [curr_node];

  while (path[curr_node] !== -1) {
    final_path.push(path[curr_node]);
    curr_node = path[curr_node];
  }

  return final_path.reverse();
}
