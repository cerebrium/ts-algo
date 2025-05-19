"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maze_solver = void 0;
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
function maze_solver(maze) {
    const path = [];
    const visited = new Set();
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
exports.maze_solver = maze_solver;
function walk(maze, path, visited, curr_postion) {
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
    const possible_next_coords = dirs.map(([n_x, n_y]) => [x + n_x, y + n_y]);
    for (const [n_x, n_y] of possible_next_coords) {
        if (n_x < 0 ||
            n_y < 0 ||
            n_x > maze.length - 1 ||
            n_y > maze[n_x].length - 1) {
            continue;
        }
        if (walk(maze, path, visited, [n_x, n_y])) {
            return true;
        }
    }
    path.pop();
    return false;
}
//# sourceMappingURL=maze_solver.js.map