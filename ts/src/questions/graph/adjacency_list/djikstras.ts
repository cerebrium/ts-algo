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
  const visited: boolean[] = new Array(graph.length).fill(false);

  while (
    visited.some((v, i) => !v && distances[i] !== Number.MAX_SAFE_INTEGER)
  ) {
    const parent = getLowestClosestChild(visited, distances);
    const children = graph[parent];

    visited[parent] = true;

    for (const [child, weight] of children) {
      const prospectiveValue = distances[parent] + weight;
      if (prospectiveValue < distances[child]) {
        path[child] = parent;
        distances[child] = prospectiveValue;
      }
    }
  }

  return createFinalPath(path, target);
}

function getLowestClosestChild(
  visited: boolean[],
  distances: number[]
): number {
  let idx = 0;
  let currMax: number = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < visited.length; i++) {
    if (
      !visited[i] &&
      distances[i] !== Number.MAX_SAFE_INTEGER &&
      distances[i] < currMax
    ) {
      idx = i;
      currMax = distances[i];
    }
  }

  return idx;
}

function createFinalPath(path: number[], target: number): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let currNode: number = target;
  const finalPath: number[] = [target];

  while (path[currNode] !== -1) {
    finalPath.push(path[currNode]);
    currNode = path[currNode];
  }

  return finalPath.reverse();
}
