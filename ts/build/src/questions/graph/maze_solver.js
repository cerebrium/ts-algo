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
    let que_idx = 0;
    const que = [];
    const visited = [];
    const path = new Map(); // [is_found, p_x, p_y]
    let final_location = null;
    for (let i = 0; i < maze.length; i++) {
        visited.push(new Array(maze[i].length).fill(false));
        for (let x = 0; x < maze[i].length; x++) {
            path.set(`${i}_${x}`, [-1, 0, 0]);
            if (maze[i][x] === 'S') {
                que.push([i, x]);
                visited[i][x] = true;
            }
        }
    }
    while (que_idx < que.length) {
        const [x, y] = que[que_idx];
        const children = dirs.map(([n_x, n_y]) => {
            return [x + n_x, y + n_y];
        });
        for (const [n_x, n_y] of children) {
            if (n_y < 0 ||
                n_x < 0 ||
                n_x > maze.length - 1 ||
                n_y > maze[n_x].length - 1) {
                continue;
            }
            if (visited[n_x][n_y]) {
                continue;
            }
            visited[n_x][n_y] = true;
            if (maze[n_x][n_y] === '#') {
                continue;
            }
            path.set(`${n_x}_${n_y}`, [1, x, y]);
            if (maze[n_x][n_y] === 'E') {
                final_location = [1, n_x, n_y];
                break;
            }
            que.push([n_x, n_y]);
        }
        que_idx++;
    }
    if (!final_location) {
        return null;
    }
    return make_path(path, final_location);
}
exports.maze_solver = maze_solver;
function make_path(path, final_location) {
    // We know that the first node exists
    let curr_node = final_location;
    const final_path = [];
    while (curr_node[0] !== -1) {
        final_path.push([curr_node[1], curr_node[2]]);
        curr_node = path.get(`${curr_node[1]}_${curr_node[2]}`);
    }
    return final_path.reverse();
}
//# sourceMappingURL=maze_solver.js.map