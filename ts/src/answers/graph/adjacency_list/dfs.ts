/*
 *
 * The following represents a proper graph with weights.
 * [
 * [[1, 2], [4, 12]],
 * [[2, 4]]
 * [[3, 8]]
 * [[4, 9]]
 * [[5, 2]]
 * [[0, 4]]
 * ]
 *
 * This is the proper way to represent an adjacency list. The
 * index still represents the node, but at each node there
 * is an array of tuples which are its children. The children
 * are weighted. The first index is the location of the node,
 * the second index of the tuple is the weight of the edge.
 *
 * The above is a weighted graph of a circle, where the first (0)
 * node also has an edge to the fourth node.
 *
 */

export function adj_list_dfs(
  graph: number[][][],
  target: number,
  start: number
): number[] | null {
  const visited: Set<number> = new Set();
  const path: number[] = [];

  visited.add(start);

  walk(graph, target, path, visited, start);

  if (path.length === 0) {
    return null;
  }

  return path;
}

function walk(
  graph: number[][][],
  target: number,
  path: number[],
  visited: Set<number>,
  parent: number
): boolean {
  // pre
  visited.add(parent);

  // add the node
  path.push(parent);

  if (target === parent) {
    return true;
  }

  const children = graph[parent];

  // recurse
  for (let child_idx = 0; child_idx < children.length; child_idx++) {
    const [child, _] = children[child_idx];
    if (visited.has(child)) {
      continue;
    }

    if (walk(graph, target, path, visited, child)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}
