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
  const visited: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = new Array(graph.length).fill(-1);
  const distances: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );

  distances[0] = 0;

  while (
    visited.some((v, i) => {
      return !v && distances[i] !== Number.MAX_SAFE_INTEGER;
    })
  ) {
    const parent: number = get_lowest_close_child(visited, distances);
    visited[parent] = true;

    const children = graph[parent];

    for (const [child, weight] of children) {
      let prev_distance = weight + distances[parent];

      if (prev_distance < distances[child]) {
        distances[child] = prev_distance;
        path[child] = parent;
      }
    }
  }

  return create_path(target, path);
}

function get_lowest_close_child(
  visited: boolean[],
  distances: number[]
): number {
  let idx = 0;
  let curr_low = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i] && distances[i] !== Number.MAX_SAFE_INTEGER) {
      if (curr_low > distances[i]) {
        idx = i;
      }
    }
  }

  return idx;
}

function create_path(target: number, path: number[]): number[] | null {
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
