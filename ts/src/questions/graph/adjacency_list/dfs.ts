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
  const visited: boolean[] = new Array(graph.length).fill(false);

  walk(graph, target, start, visited, path);

  if (!path.length) {
    return null;
  }

  return path;
}

function walk(
  graph: number[][][],
  target: number,
  curr_node: number,
  visited: boolean[],
  path: number[]
): boolean {
  // pre
  visited[curr_node] = true;

  path.push(curr_node);

  if (target === curr_node) {
    return true;
  }

  const children = graph[curr_node];
  // recurse
  for (const [child, _] of children) {
    if (visited[child]) {
      continue;
    }

    if (walk(graph, target, child, visited, path)) {
      return true;
    }
  }

  // post
  path.pop();
  return false;
}
