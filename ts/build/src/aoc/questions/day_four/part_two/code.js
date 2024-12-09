"use strict";
/**
 *
 * https://adventofcode.com/2024/day/4#part2
 *
 * For this i will go to every 'a', from there check diagonal
 * nodes. If diagonals contain 2 's' and 2 'm' and s or m aren't
 * diagonal to each other, then its a find.
 *
 * To save time, will only parse inner loops, i.e. the
 * most top, right, left, and bottom rows will be ignored,
 * since there aren't possible diagonals for them, will also
 * make it easier to do edge checking.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_four_part_two = void 0;
const diagonals = [
    [-1, -1],
    [-1, +1],
    [+1, +1],
    [+1, -1],
];
function day_four_part_two(input) {
    let x_mas_s = 0;
    let a = 0;
    for (let i = 1; i < input.length - 1; i++) {
        for (let x = 1; x < input[i].length - 1; x++) {
            if (input[i][x] !== 'A') {
                continue;
            }
            const test_coords = diagonals.map(([l_x, l_y]) => {
                return input[i + l_x][x + l_y];
            });
            ++a;
            if (((test_coords[0] === 'M' && test_coords[2] === 'S') ||
                (test_coords[0] === 'S' && test_coords[2] === 'M')) &&
                ((test_coords[1] === 'M' && test_coords[3] === 'S') ||
                    (test_coords[1] === 'S' && test_coords[3] === 'M'))) {
                ++x_mas_s;
            }
        }
    }
    return x_mas_s;
}
exports.day_four_part_two = day_four_part_two;
//# sourceMappingURL=code.js.map