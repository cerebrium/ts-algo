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
const possible_directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
];
const letters = ['M', 'A', 'S'];
function day_four_part_one(input) {
    let xmas_found = 0;
    // Identify starting points
    for (let row = 0; row < input.length; row++) {
        for (let column = 0; column < input[row].length; column++) {
            const current_char = input[row][column];
            if (current_char !== 'X') {
                continue;
            }
            for (let direction = 0; direction < possible_directions.length; direction++) {
                const is_xmas = depth_first_search([row, column], possible_directions[direction], 0, input);
                if (is_xmas) {
                    ++xmas_found;
                }
            }
        }
    }
    return xmas_found;
}
function depth_first_search(coords, direction, current_letter, graph) {
    const [x, y] = [coords[0] + direction[0], coords[1] + direction[1]];
    // Base case
    if (x < 0 || x > graph.length || y < 0 || y > graph[0].length) {
        return false;
    }
    if (graph[x][y] !== letters[current_letter]) {
        return false;
    }
    if (letters[current_letter] === 'S') {
        return true;
    }
    // Recurse
    return depth_first_search([x, y], direction, current_letter + 1, graph);
}
//# sourceMappingURL=part_one.js.map