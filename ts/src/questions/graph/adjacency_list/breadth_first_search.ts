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
  const visited: boolean[] = new Array(data.length).fill(false);
  visited[start] = true;
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

      if (target === child) {
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

  let curr_node_idx: number = target;
  const final_arr: number[] = [curr_node_idx];

  while (path[curr_node_idx] !== -1) {
    final_arr.push(path[curr_node_idx]);
    curr_node_idx = path[curr_node_idx];
  }

  return final_arr.reverse();
}
