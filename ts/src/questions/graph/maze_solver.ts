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

export function maze_solver(maze: Array<Array<string>>) {}

function maze_helper(
  maze: Array<Array<string>>,
  path: Array<Array<number>> = [],
  currentCoords: [x: number, y: number],
  visited: Set<string>
): Array<Array<number>> | void {}
