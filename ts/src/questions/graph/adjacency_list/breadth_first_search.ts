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
  const visited: boolean[] = [];
  const path: number[] = new Array(data.length).fill(-1);

  let curr_que_idx: number = 0;
  const que: number[] = [start];

  while (curr_que_idx < que.length) {
    const parent = que[curr_que_idx];
    const children = data[parent];

    if (!children) {
      curr_que_idx++;
      continue;
    }

    for (const [child, _] of children) {
      if (visited[child]) {
        continue;
      }

      visited[child] = true;

      path[child] = parent;

      if (child === target) {
        break;
      }

      que.push(child);
    }

    curr_que_idx++;
  }

  return create_path(path, target);
}

function create_path(path: number[], target: number): null | number[] {
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
