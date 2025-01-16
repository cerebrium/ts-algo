/*
 *
 * Djikstras is a breadth first search for a target node. It goes
 * out in concentric circles from the starting node. It gives
 * every node infinite weight, then fills in the smallest weights
 * as the nodes are traveresed. In the end the path to the target
 * node with the aggregate smallest weights is found.
 *
 */

export function djikstras(
  graph: Array<number[][]>,
  target: number
): null | number[] {
  const distances: number[] = new Array(graph.length).fill(
    Number.MAX_SAFE_INTEGER
  );
  const path: number[] = new Array(graph.length).fill(-1);
  const visited: number[] = new Array(graph.length).fill(0);
  distances[0] = 0;

  while (
    visited.some((val, idx) => {
      return val === 0 && distances[idx] !== Number.MAX_SAFE_INTEGER;
    })
  ) {
    const closest_child = _lowest_close_child(distances, visited);
  }

  return path;
}

function _lowest_close_child(visited: number[], distances: number[]): number {
  return 1;
}
