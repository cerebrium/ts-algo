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
 */

const path_options = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function maze_solver(maze: Array<Array<string>>): number[][] {
  const path: Array<Array<number>> = [];
  const visited: Set<string> = new Set();

  for (let i = 0; i < maze.length; i++) {
    if (i === 0 || i === maze.length - 1) {
      for (let y = 0; y < maze[i].length; y++) {
        if (maze[i][y] === 'S') {
          traverse(maze, path, [i, y], visited);
          return path;
        }
      }
    }

    if (maze[i][0] === 'S') {
      traverse(maze, path, [i, 0], visited);
      return path;
    }

    if (maze[i][maze[i].length - 1] === 'S') {
      traverse(maze, path, [i, 0], visited);
      return path;
    }
  }

  return path;
}

function traverse(
  maze: Array<Array<string>>,
  path: Array<Array<number>> = [],
  currentCoords: [x: number, y: number],
  visited: Set<string>
): boolean {
  /**
   *
   * Base Cases:
   * 1. Is at the end -> true
   * 2. Is on a wall -> false
   * 3. Is visited -> false
   * 4. Is out of bounds -> false
   *
   */

  const [x, y] = currentCoords;

  visited.add(`${x}${y}`);

  // If we reach an edge
  if (x > maze.length - 1 || x < 0 || y > maze[0].length - 1 || y < 0) {
    return false;
  }

  // If we find the end
  if (maze[x][y] === 'E') {
    path.push(currentCoords);
    return true;
  }

  // If we hit a wall
  if (maze[x][y] === '#') {
    return false;
  }

  // pre
  path.push(currentCoords);

  // recurse
  for (let i = 0; i < path_options.length; i++) {
    const [x_additive, y_additive] = path_options[i];
    const [new_x, new_y] = [x + x_additive, y + y_additive];

    if (!visited.has(`${new_x}${new_y}`)) {
      const is_end = traverse(maze, path, [new_x, new_y], visited);
      if (is_end) {
        return true;
      }
    }
  }

  // post
  path.pop();

  return false;
}
