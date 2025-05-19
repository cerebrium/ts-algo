/**
 *
 * Maze solver:
 *
 * Given a matrix of walls ('#'), a start ('S'), and an end ('E')
 * we need to write an algorithm that can traverse through and
 * find the end from the start.
 *
 * We want the function to return a list of tuples, which would
 * be the coordinates from start to end.
 *
 ex: [
    ['#', '#', '#', '#', '#', '#', '#', '#', 'E'],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['S', '', '', '', '', '', '', '', ''],
  ];

 *
 */
const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

export function maze_solver(maze: string[][]): number[][] | null {
  const path: number[][] = [];
  const visited: Set<string> = new Set();

  for (let x = 0; x < maze.length; x++) {
    for (let y = 0; y < maze[x].length; y++) {
      if (maze[x][y] !== 'S') {
        continue;
      }

      walk(maze, path, visited, [x, y]);
    }
  }

  if (path.length == 0) {
    return null;
  }

  return path;
}

function walk(
  maze: string[][],
  path: number[][],
  visited: Set<string>,
  curr_postion: [number, number]
): boolean {
  const [x, y] = curr_postion;
  const str_x_y = `${x}_${y}`;

  if (visited.has(str_x_y)) {
    return false;
  }

  visited.add(str_x_y);

  const val = maze[x][y];

  if (val === '#') {
    return false;
  }

  path.push(curr_postion);

  if (val === 'E') {
    return true;
  }

  const possible_next_coords: Array<[number, number]> = dirs.map(
    ([n_x, n_y]) => [x + n_x, y + n_y]
  );

  for (const [n_x, n_y] of possible_next_coords) {
    if (
      n_x < 0 ||
      n_y < 0 ||
      n_x > maze.length - 1 ||
      n_y > maze[n_x].length - 1
    ) {
      continue;
    }

    if (walk(maze, path, visited, [n_x, n_y])) {
      return true;
    }
  }

  path.pop();

  return false;
}
