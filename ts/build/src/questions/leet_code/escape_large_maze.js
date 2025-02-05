"use strict";
/*

  There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are
  (x, y).

  We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square. There is
  also an array of blocked squares, where each blocked[i] = [xi, yi] represents a blocked square with
  coordinates (xi, yi).

  Each move, we can walk one square north, east, south, or west if the square is not in the array of
  blocked squares. We are also not allowed to walk outside of the grid.

  Return true if and only if it is possible to reach the target square from the source square through
  a sequence of valid moves.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEscapePossible = void 0;
function isEscapePossible(blocked, source, target) {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const visited = new Set();
    const blocked_set = new Set();
    for (const [x, y] of blocked) {
        blocked_set.add('' + x + y);
    }
    let curr_q_idx = 0;
    const que = [source];
    while (curr_q_idx < que.length) {
        const [x, y] = que[curr_q_idx];
        const possible_paths = dirs.map(([n_x, n_y]) => {
            return [x + n_x, y + n_y];
        });
        for (const [n_x, n_y] of possible_paths) {
            if (n_x < 0 || n_y < 0 || n_x > 999999 || n_y > 999999) {
                continue;
            }
            if (visited.has('' + n_x + n_y)) {
                continue;
            }
            if (blocked_set.has('' + n_x + n_y)) {
                continue;
            }
            visited.add('' + n_x + n_y);
            if (target[0] === n_x && target[1] === n_y) {
                return true;
            }
            que.push([n_x, n_y]);
        }
        curr_q_idx++;
    }
    return false;
}
exports.isEscapePossible = isEscapePossible;
//# sourceMappingURL=escape_large_maze.js.map