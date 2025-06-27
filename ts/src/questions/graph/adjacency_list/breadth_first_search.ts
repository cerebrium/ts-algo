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
  target: number,
  start: number = 0
): Array<number> | null {
  const path: number[] = new Array(data.length).fill(-1);
  const visited: Set<number> = new Set();
  let curr_idx: number = 0;
  const que: number[] = [start];

  while (curr_idx < que.length) {
    const parent = que[curr_idx];
    const children = data[parent];

    if (!children || !children.length) {
      curr_idx++;
    }

    for (const [child, _] of children) {
      if (visited.has(child)) {
        continue;
      }

      visited.add(child);

      path[child] = parent;
      if (child === target) {
        curr_idx = que.length + 1;
        break;
      }

      que.push(child);
    }

    curr_idx++;
  }

  return create_final_path(target, path);
}

function create_final_path(target: number, path: number[]): number[] | null {
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
