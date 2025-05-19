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
  const distances: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );
  distances[0] = 0;
  const visited = new Array(graph.length).fill(false);

  while (
    visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)
  ) {
    const parent = get_lowest_closest_child(distances, visited);
    visited[parent] = true;

    for (const [child, weight] of graph[parent]) {
      const prospective_min_distance = distances[parent] + weight;

      if (prospective_min_distance < distances[child]) {
        path[child] = parent;
        distances[child] = prospective_min_distance;
      }
    }
  }

  return create_path(target, path);
}

function get_lowest_closest_child(distances: number[], visited: boolean[]) {
  let curr_node = 0;
  let curr_min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < visited.length; i++) {
    if (
      !visited[i] &&
      distances[i] !== Number.MAX_SAFE_INTEGER &&
      curr_min > distances[i]
    ) {
      curr_min = distances[i];
      curr_node = i;
    }
  }

  return curr_node;
}

function create_path(target: number, path: number[]): number[] | null {
  if (path[target] === -1) {
    return null;
  }

  let curr_node = target;
  const final_path: number[] = [curr_node];

  while (path[curr_node] !== -1) {
    final_path.push(path[curr_node]);
    curr_node = path[curr_node];
  }

  return final_path.reverse();
}
