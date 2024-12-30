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

export function maze_solver(
  maze: Array<Array<string>>
): Array<Array<number>> | null {
  /*
   *
   * We want to look at every element in the matrix.
   * If the element is 'S' then we start from there.
   *
   * From that starting point we can go up, down, left,
   * or right. With the we will need to perform a
   * depth first search that will walk each direction
   * starting up, and see if it can find the 'E'
   *
   */
  const visited: Set<string> = new Set();
  const path: Array<[number, number]> = [];

  for (let i = 0; i < maze.length; i++) {
    for (let x = 0; x < maze[i].length; x++) {
      if (maze[i][x] === 'S') {
        return traverse(maze, path, [i, x], visited);
      }
    }
  }

  return null;
}

const directions = [
  [1, 0], // up
  [-1, 0], // down
  [0, -1], // left
  [0, 1], // right
];

function traverse(
  maze: Array<Array<string>>,
  path: Array<[number, number]> = [],
  currentCoords: [x: number, y: number],
  visited: Set<string>
): Array<[number, number]> | null {
  /*
   *
   * We are going to do a depth first search on this map. We will
   * walk as far as we can through all children. if all children
   * of a node are visited, then it will be considred visited.
   *
   */
  const [x, y] = currentCoords;

  // Base cases
  if (visited.has(`${x}${y}`)) {
    return null;
  }

  visited.add(`${x}${y}`);

  const val = maze[x][y];

  switch (val) {
    case 'E':
      path.push(currentCoords);
      return path;
    case '#':
      return null;
  }

  // next coords
  const next_locations: Array<[number, number]> = directions.map(
    ([additive_x, additive_y], idx) => {
      return [additive_x + x, additive_y + y];
    }
  );

  for (let [next_x, next_y] of next_locations) {
    // Bounds check
    if (
      next_x > maze.length - 1 ||
      next_x < 0 ||
      next_y > maze[0].length - 1 ||
      next_y < 0
    ) {
      continue;
    }

    path.push(currentCoords);
    const correct_path = traverse(maze, path, [next_x, next_y], visited);
    if (correct_path) {
      return correct_path;
    }
    path.pop();
  }

  return null;
}
