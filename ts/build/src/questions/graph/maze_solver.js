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
const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];
function get_possible_coords(curr_coord, bounds) {
    return directions
        .map(([x, y]) => {
        return [curr_coord[0] + x, curr_coord[1] + y];
    })
        .filter(([x, y]) => {
        return x > -1 && x < bounds[0] && y > -1 && y < bounds[1];
    });
}
function maze_solver(maze) {
    const path = new Map();
    const visited = new Array(maze.length);
    for (let row = 0; row < visited.length; row++) {
        visited[row] = new Array(maze[row].length).fill(false);
    }
    const que = [];
    let curr_que_idx = 0;
    let end_coords = null;
    for (let row = 0; row < maze.length; row++) {
        for (let column = 0; column < maze[row].length; column++) {
            if (maze[row][column] === 'S') {
                que.push([row, column]);
                visited[row][column] = true;
                path.set(`${row},${column}`, 'S');
            }
        }
    }
    while (curr_que_idx < que.length) {
        const [x, y] = que[curr_que_idx];
        const possible_coords = get_possible_coords([x, y], [maze.length, maze[x].length]);
        for (const [child_x, child_y] of possible_coords) {
            if (visited[child_x][child_y]) {
                continue;
            }
            visited[child_x][child_y] = true;
            if (maze[child_x][child_y] === '#') {
                continue;
            }
            path.set(`${child_x},${child_y}`, `${x},${y}`);
            if (maze[child_x][child_y] === 'E') {
                curr_que_idx = que.length + 1;
                end_coords = `${child_x},${child_y}`;
                break;
            }
            que.push([child_x, child_y]);
        }
        curr_que_idx++;
    }
    return create_final_path(path, end_coords);
}
exports.maze_solver = maze_solver;
function create_final_path(path, end_coords) {
    if (!end_coords) {
        return null;
    }
    let curr_coord = end_coords;
    let found_val = path.get(curr_coord);
    const reversed_final_path = [curr_coord];
    while (found_val && found_val !== 'S') {
        reversed_final_path.push(found_val);
        found_val = path.get(found_val);
    }
    const final_path = [];
    for (let i = reversed_final_path.length - 1; i > -1; i--) {
        const [x, y] = reversed_final_path[i].split(',').map(s => parseInt(s));
        final_path.push([x, y]);
    }
    return final_path;
}
//# sourceMappingURL=maze_solver.js.map