"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.maze_solver = void 0;
const coords = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
function maze_solver(maze) {
    const path = [];
    const visited = new Set();
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
exports.maze_solver = maze_solver;
function walk(maze, path, visited, currCoords) {
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
        if (n_row < 0 ||
            n_col < 0 ||
            n_row > maze.length - 1 ||
            n_col > maze[n_row].length - 1) {
            continue;
        }
        if (walk(maze, path, visited, [n_row, n_col])) {
            return true;
        }
    }
    path.pop();
    return false;
}
//# sourceMappingURL=maze_solver.js.map