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

  walk(graph, start, target, visited, path);

  if (!path.length) {
    return null;
  }

  return path;
}

function walk(
  graph: number[][][],
  curr_val: number,
  target: number,
  visited: boolean[],
  path: number[]
): boolean {
  // pre
  visited[curr_val] = true;

  path.push(curr_val);

  if (curr_val === target) {
    return true;
  }

  // recurse
  const children = graph[curr_val];
  for (const [child, _] of children) {
    if (visited[child]) {
      continue;
    }

    if (walk(graph, child, target, visited, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}
