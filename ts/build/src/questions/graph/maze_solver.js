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
    for (let x = 0; x < maze.length; x++) {
        for (let y = 0; y < maze[x].length; y++) {
            if (maze[x][y] === 'S') {
                walk(maze, visited, path, [x, y]);
            }
        }
    }
    if (!path.length) {
        return null;
    }
    return path;
}
exports.maze_solver = maze_solver;
function walk(maze, visited, path, currCoords) {
    const [x, y] = currCoords;
    const strXy = `${x}_${y}`;
    if (visited.has(strXy)) {
        return false;
    }
    visited.add(strXy);
    const val = maze[x][y];
    if (val === '#') {
        return false;
    }
    path.push(currCoords);
    if (val === 'E') {
        return true;
    }
    for (const [nX, nY] of coords.map(([pX, pY]) => [pX + x, pY + y])) {
        if (nX < 0 || nY < 0 || nX > maze.length - 1 || nY > maze[nX].length - 1) {
            continue;
        }
        if (walk(maze, visited, path, [nX, nY])) {
            return true;
        }
    }
    path.pop();
    return false;
}
//# sourceMappingURL=maze_solver.js.map