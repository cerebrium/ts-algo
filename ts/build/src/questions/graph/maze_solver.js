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
// c nst directions: Array<[number, number]> = [
//   [-1, 0],
//   [1, 0],
//   [0, 1],
//   [0, -1],
// ];
//
// function get_possible_coords(
//   curr_coord: [number, number],
//   bounds: [number, number]
// ): Array<[number, number]> {
//   return directions
//     .map(([x, y]) => {
//       return [curr_coord[0] + x, curr_coord[1] + y];
//     })
//     .filter(([x, y]) => {
//       return x > -1 && x < bounds[0] && y > -1 && y < bounds[1];
//     }) as Array<[number, number]>;
// }
//
// export function maze_solver(maze: string[][]): number[][] | null {
//   const path: Map<string, string> = new Map();
//   const visited: boolean[][] = new Array(maze.length);
//   for (let row = 0; row < visited.length; row++) {
//     visited[row] = new Array(maze[row].length).fill(false);
//   }
//   const que: Array<[number, number]> = [];
//
//   let curr_que_idx: number = 0;
//   let end_coords: string | null = null;
//
//   for (let row = 0; row < maze.length; row++) {
//     for (let column = 0; column < maze[row].length; column++) {
//       if (maze[row][column] === 'S') {
//         que.push([row, column]);
//         visited[row][column] = true;
//         path.set(`${row},${column}`, 'S');
//       }
//     }
//   }
//
//   while (curr_que_idx < que.length) {
//     const [x, y] = que[curr_que_idx];
//     const possible_coords = get_possible_coords(
//       [x, y],
//       [maze.length, maze[x].length]
//     );
//
//     for (const [child_x, child_y] of possible_coords) {
//       if (visited[child_x][child_y]) {
//         continue;
//       }
//
//       visited[child_x][child_y] = true;
//
//       if (maze[child_x][child_y] === '#') {
//         continue;
//       }
//
//       path.set(`${child_x},${child_y}`, `${x},${y}`);
//
//       if (maze[child_x][child_y] === 'E') {
//         curr_que_idx = que.length + 1;
//         end_coords = `${child_x},${child_y}`;
//         break;
//       }
//
//       que.push([child_x, child_y]);
//     }
//
//     curr_que_idx++;
//   }
//
//   return create_final_path(path, end_coords);
// }
//
// function create_final_path(
//   path: Map<string, string>,
//   end_coords: string | null
// ): null | Array<[number, number]> {
//   if (!end_coords) {
//     return null;
//   }
//
//   let curr_coord = end_coords;
//   let found_val = path.get(curr_coord);
//   const reversed_final_path: string[] = [curr_coord];
//
//   while (found_val && found_val !== 'S') {
//     reversed_final_path.push(found_val);
//     found_val = path.get(found_val);
//   }
//
//   const final_path: Array<[number, number]> = [];
//
//   for (let i = reversed_final_path.length - 1; i > -1; i--) {
//     const [x, y] = reversed_final_path[i].split(',').map(s => parseInt(s));
//     final_path.push([x, y]);
//   }
//
//   return final_path;
// }
//
//# sourceMappingURL=maze_solver.js.map