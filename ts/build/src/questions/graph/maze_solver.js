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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.maze_solver = void 0;
function maze_solver(maze) {
    // Need to check the edges for the start of the maze
    const height = maze.length - 1;
    const width = maze[0].length - 1;
    for (let i = 0; i < width; i++) {
        const [start_one, start_two] = [maze[0][i], maze[height][i]];
        if (start_one === 'S') {
            const visited = new Set();
            visited.add(`0${i}`);
            return maze_helper(maze, [], [0, i], visited);
        }
        if (start_two === 'S') {
            const visited = new Set();
            visited.add(`${height}${i}`);
            return maze_helper(maze, [], [height, i], visited);
        }
    }
    for (let i = 0; i < height; i++) {
        const [start_one, start_two] = [maze[i][0], maze[i][width]];
        if (start_one === 'S') {
            const visited = new Set();
            visited.add(`${i}0`);
            return maze_helper(maze, [], [i, 0], visited);
        }
        if (start_two === 'S') {
            const visited = new Set();
            visited.add(`${i}${width}`);
            return maze_helper(maze, [], [i, width], visited);
        }
    }
}
exports.maze_solver = maze_solver;
const availablePaths = [
    (coords, _) => {
        if (coords[1] - 1 < 0) {
            return null;
        }
        return [coords[0], coords[1] - 1];
    },
    (coords, limits) => {
        if (coords[1] + 1 > limits[0]) {
            return null;
        }
        return [coords[0], coords[1] + 1];
    },
    (coords, _) => {
        if (coords[0] - 1 < 0) {
            return null;
        }
        return [coords[0] - 1, coords[1]];
    },
    (coords, limits) => {
        if (coords[0] + 1 > limits[1]) {
            return null;
        }
        return [coords[0] + 1, coords[1]];
    },
];
function maze_helper(maze, path = [], currentCoords, visited) {
    const [x, y] = currentCoords;
    const height = maze.length - 1;
    const width = maze[0].length - 1;
    // Normal, non-wall case
    path.push(currentCoords);
    // Base case -> we have reached the
    // end.
    if (maze[x][y] === 'E') {
        return path;
    }
    for (let i = 0; i < availablePaths.length; i++) {
        const direction = availablePaths[i](currentCoords, [height, width]);
        if (direction &&
            maze[direction[0]][direction[1]] !== '#' &&
            !visited.has(`${direction[0]}${direction[1]}`)) {
            visited.add(`${direction[0]}${direction[1]}`);
            return maze_helper(maze, path, direction, visited);
        }
    }
}
//# sourceMappingURL=maze_solver.js.map