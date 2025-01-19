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
  const visited: boolean[] = new Array(data.length).fill(false);
  const path: number[] = new Array(data.length).fill(-1);

  let curr_que_idx: number = 0;
  const que: number[] = [start];

  while (curr_que_idx < que.length) {
    const parent: number = que[curr_que_idx];
    const children = data[parent];

    for (const [child, _] of children) {
      if (visited[child]) {
        continue;
      }

      visited[child] = true;

      path[child] = parent;

      if (child === target) {
        curr_que_idx = que.length + 1;
        break;
      }

      que.push(child);
    }

    curr_que_idx++;
  }

  return create_final_path(path, target);
}

function create_final_path(path: number[], target: number): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let current_node = target;
  const final_arr: number[] = [current_node];

  while (path[current_node] !== -1) {
    final_arr.push(path[current_node]);
    current_node = path[current_node];
  }

  return final_arr.reverse();
}
