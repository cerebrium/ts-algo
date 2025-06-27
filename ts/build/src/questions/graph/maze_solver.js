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
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
function maze_solver(maze) {
    const visited = new Set();
    const path = [];
    for (let x = 0; x < maze.length; x++) {
        for (let y = 0; y < maze[x].length; y++) {
            if (maze[x][y] === 'S') {
                walk(maze, [x, y], path, visited);
            }
        }
    }
    if (path.length) {
        return path;
    }
    return null;
}
exports.maze_solver = maze_solver;
function walk(maze, curr_coords, path, visited) {
    const [x, y] = curr_coords;
    if (visited.has(`${x}_${y}`)) {
        return false;
    }
    visited.add(`${x}_${y}`);
    const val = maze[x][y];
    if (val === '#') {
        return false;
    }
    path.push([x, y]);
    if (val === 'E') {
        return true;
    }
    const possible_directions = coords.map(([n_x, n_y]) => {
        return [n_x + x, n_y + y];
    });
    for (const [n_x, n_y] of possible_directions) {
        if (n_x < 0 ||
            n_y < 0 ||
            n_x > maze.length - 1 ||
            n_y > maze[n_x].length - 1) {
            continue;
        }
        if (walk(maze, [n_x, n_y], path, visited)) {
            return true;
        }
    }
    path.pop();
    return false;
}
//# sourceMappingURL=maze_solver.js.map