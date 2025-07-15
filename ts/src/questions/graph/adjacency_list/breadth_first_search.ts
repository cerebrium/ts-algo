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
  const que: number[] = [start];
  let idx: number = 0;

  while (idx < que.length) {
    const parent = que[idx];
    const children = data[parent];

    if (!data || !data.length) {
      idx++;
      continue;
    }

    for (const [child, _] of children) {
      if (typeof child !== 'number') {
        continue;
      }

      if (visited.has(child)) {
        continue;
      }

      visited.add(child);

      path[child] = parent;

      if (child === target) {
        idx = que.length + 1;
        break;
      }

      que.push(child);
    }

    idx++;
  }

  return createFinalPath(path, target);
}

function createFinalPath(path: number[], target: number): null | number[] {
  if (path[target] === -1) {
    return null;
  }

  let currNode: number = target;
  const finalPath: number[] = [target];

  while (path[currNode] !== -1) {
    finalPath.push(path[currNode]);
    currNode = path[currNode];
  }

  return finalPath.reverse();
}
