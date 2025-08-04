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
  let currIdx = 0;
  const que: number[] = [start];

  while (currIdx < que.length) {
    const parent = que[currIdx];
    const children = data[parent];

    if (!children || !children.length) {
      currIdx++;
      continue;
    }

    for (const [child, _] of children) {
      if (visited[child]) {
        continue;
      }

      visited[child] = true;

      path[child] = parent;

      if (child === target) {
        currIdx = que.length + 1;
        break;
      }

      que.push(child);
    }

    currIdx++;
  }

  return createFinalPath(path, target);
}

function createFinalPath(path: number[], target: number): number[] | null {
  if (path[target] === -1) {
    return null;
  }

  let currVal = target;
  const finalPath: number[] = [target];

  while (path[currVal] !== -1) {
    finalPath.push(path[currVal]);
    currVal = path[currVal];
  }

  return finalPath.reverse();
}
