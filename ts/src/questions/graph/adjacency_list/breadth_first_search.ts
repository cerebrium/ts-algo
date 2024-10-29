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

export function adj_list_bfs(
  data: Array<number[][]>,
  target: number
): Array<number> | null {
  if (!data.length) {
    return null;
  }

  const parent_refs: Array<number> = new Array(data.length).fill(-1);
  const visited: Array<boolean> = new Array(data.length).fill(false);
  visited[0] = true;

  /**
   *
   * Traverse all available children
   * save the parent into the value of
   * the parent_refs.
   *
   * save the bool into the visited at
   * index of element.
   *
   */

  let que = [0];
  let current_idx = 0;
  let found_node = false;
  let outer = 0;

  while (current_idx < que.length && !found_node) {
    outer++;
    if (outer > 15) {
      return null;
    }
    const current_node = que[current_idx];
    const current_connections = data[current_node];

    for (let i = 0; i < current_connections.length; i++) {
      const current_child = current_connections[i][0];
      // Add parent
      parent_refs[current_child] = current_node;

      // Check for target
      if (current_child === target) {
        found_node = true;
        break;
      }

      // Add Children
      if (!visited[current_child]) {
        parent_refs[current_child] = que.push(current_child);
      }

      // Add seen
      visited[current_child] = true;
    }
    current_idx++;
  }

  if (parent_refs[target] === -1) {
    return null;
  }

  // Create path
  const path: number[] = [target];

  let current_node = target;
  let inner = 0;
  while (parent_refs[current_node] !== 0) {
    inner++;
    if (inner > 15) {
      return null;
    }
    console.log('its final', current_node, path);
    path.push(parent_refs[current_node]);
    current_node = parent_refs[current_node];
  }
  path.push(0);

  return path.reverse();
}
