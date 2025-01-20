"use strict";
/**
 *
 
"Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it. After a brief flash, you recognize the interior of the Ceres monitoring station!

As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual,
though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:


..X...
.SAMX.
.A..A.
XMAS.S
.X....

The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX

In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX

Take a look at the little Elf's word search. How many times does XMAS appear?

 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_four_part_one = void 0;
const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1], // down-right
];
const letters = ['M', 'A', 'S'];
function day_four_part_one(input) {
    let sum = 0;
    for (let row = 0; row < input.length; row++) {
        for (let column = 0; column < input[row].length; column++) {
            if (input[row][column] === 'X') {
                const possible_directions = get_possible_children([row, column], [input.length - 1, input[row].length - 1]);
                for (const posiible_direction of possible_directions) {
                    if (walk(input, posiible_direction, 0)) {
                        sum++;
                    }
                }
            }
        }
    }
    return sum;
}
exports.day_four_part_one = day_four_part_one;
function walk(input, coord, letter_idx) {
    const [x, y, dir] = coord;
    const val = input[x][y];
    // pre
    if (val !== letters[letter_idx]) {
        return false;
    }
    if (letters[letter_idx] === 'S') {
        return true;
    }
    // recurse
    const next_dir = get_next_child([x, y], [input.length - 1, input[coord[0]].length - 1], dir);
    if (!next_dir) {
        return false;
    }
    if (walk(input, next_dir, letter_idx + 1)) {
        return true;
    }
    return false;
}
function get_possible_children(coord, bounds) {
    return dirs
        .map(([x, y], idx) => {
        return [x + coord[0], y + coord[1], idx];
    })
        .filter(([x, y]) => {
        if (x < 0 || x > bounds[0] || y < 0 || y > bounds[1]) {
            return false;
        }
        return true;
    });
}
function get_next_child(coord, bounds, dir_idx) {
    const dir = dirs[dir_idx];
    const [x, y] = [coord[0] + dir[0], coord[1] + dir[1]];
    if (x < 0 || x > bounds[0] || y < 0 || y > bounds[1]) {
        return null;
    }
    return [x, y, dir_idx];
}
//# sourceMappingURL=code.js.map