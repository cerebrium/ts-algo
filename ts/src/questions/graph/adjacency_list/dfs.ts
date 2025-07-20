/**
 *
 *
 * The first index of the tuple is the node value
 * the second is the weight
 
 Example data: 
 [
 [[1, 6]],
 [[2, 3]],
 [[3, 2]],
 [[4, 12], [5, 7]],
 [[1, 9], [5, 5]],
 [[6, 21]],
 [[7, 6]],
 [[0, 2]],
 ]



 */

export function adj_list_dfs(
  graph: number[][][],
  target: number,
  start: number = 0
): number[] | null {
  const path: number[] = [];
  const visited: Set<number> = new Set();

  traverse(graph, visited, path, start, target);

  if (!path.length) {
    return null;
  }

  return path;
}

function traverse(
  graph: number[][][],
  visited: Set<number>,
  path: number[],
  currNode: number,
  target: number
): boolean {
  if (visited.has(currNode)) {
    return false;
  }

  visited.add(currNode);

  path.push(currNode);

  if (currNode === target) {
    return true;
  }

  const children = graph[currNode];

  for (const [child, _] of children) {
    if (traverse(graph, visited, path, child, target)) {
      return true;
    }
  }

  path.pop();
  return false;
}
