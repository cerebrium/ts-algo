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

const coords: Array<[number, number]> = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function maze_solver(maze: string[][]): number[][] | null {
  const path: number[][] = [];
  const visited: Set<string> = new Set();

  for (let row = 0; row < maze.length; row++) {
    for (let column = 0; column < maze[row].length; column++) {
      if (maze[row][column] === 'S') {
        walk(maze, path, visited, [row, column]);
      }
    }
  }

  if (!path.length) {
    return null;
  }

  return path;
}

function walk(
  maze: string[][],
  path: number[][],
  visited: Set<string>,
  currCoords: [number, number]
): boolean {
  const [row, column] = currCoords;
  const strCoords = `${row}_${column}`;

  if (visited.has(strCoords)) {
    return false;
  }

  visited.add(strCoords);

  const val = maze[row][column];
  if (val === '#') {
    return false;
  }

  path.push(currCoords);

  if (val === 'E') {
    return true;
  }

  for (const [n_row, n_col] of coords.map(([x, y]) => [x + row, y + column])) {
    if (
      n_row < 0 ||
      n_col < 0 ||
      n_row > maze.length - 1 ||
      n_col > maze[n_row].length - 1
    ) {
      continue;
    }

    if (walk(maze, path, visited, [n_row, n_col])) {
      return true;
    }
  }
  path.pop();
  return false;
}
