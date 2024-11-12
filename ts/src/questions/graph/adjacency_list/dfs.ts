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
  target: number
): number[] | null {
  const path: number[] = [];
  const parent_ref = new Array(graph.length).fill(-1);
  const visited = new Array(graph.length).fill(false);
  visited[0] = true;

  const found_node = _walk(graph, parent_ref, 0, target, visited);

  if (!found_node) {
    return null;
  }

  // Walk backwards
  let curr_node = parent_ref[target];
  path.push(target);
  while (curr_node !== -1) {
    path.push(curr_node);
    curr_node = parent_ref[curr_node];
  }

  return path.reverse();
}

function _walk(
  graph: number[][][],
  parent_ref: number[],
  node_idx: number,
  target: number,
  visited: boolean[]
): boolean {
  const node = graph[node_idx];

  for (let i = 0; i < node.length; i++) {
    const [child, _] = [node[i][0], node[i][1]];

    if (child === target) {
      // Add to parent ref, and return
      parent_ref[child] = node_idx;
      return true;
    }

    if (visited[child]) {
      continue;
    }

    parent_ref[child] = node_idx;
    visited[child] = true;

    if (_walk(graph, parent_ref, child, target, visited)) {
      return true;
    }
  }

  return false;
}
