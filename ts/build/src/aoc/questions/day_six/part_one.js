"use strict";
/*
 

The Historians use their fancy device again, this time to whisk you all away to the North Pole prototype
suit manufacturing lab... in the year 1518! It turns out that having direct access to history is very
convenient for a group of historians.

You still have to be careful of time paradoxes, and so it will be important to avoid anyone from 1518
while The Historians search for the Chief. Unfortunately, a single guard is patrolling this part of the lab.

Maybe you can work out where the guard will go ahead of time so that The Historians can search safely?

You start by making a map (your puzzle input) of the situation. For example:

....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...

The map shows the current position of the guard with ^ (to indicate the guard is currently facing up
from the perspective of the map). Any obstructions - crates, desks, alchemical reactors, etc. - are shown as #.

Lab guards in 1518 follow a very strict patrol protocol which involves repeatedly following these steps:

If there is something directly in front of you, turn right 90 degrees.
Otherwise, take a step forward.
Following the above protocol, the guard moves up several times until she reaches an obstacle (in this
case, a pile of failed suit prototypes):

....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Because there is now an obstacle in front of the guard, she turns right before continuing straight in
her new facing direction:

....#.....
........>#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Reaching another obstacle (a spool of several very long polymers), she turns right again and continues downward:

....#.....
.........#
..........
..#.......
.......#..
..........
.#......v.
........#.
#.........
......#...
This process continues for a while, but the guard eventually leaves the mapped area (after walking
past a tank of universal solvent):

....#.....
.........#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#v..
By predicting the guard's route, you can determine which specific positions in the lab will be in the
patrol path. Including the guard's starting position, the positions visited by the guard before
leaving the area are marked with an X:

....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..
In this example, the guard will visit 41 distinct positions on your map.

Predict the path of the guard. How many distinct positions will the guard visit before leaving the mapped area?


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_six_part_one = void 0;
function day_six_part_one(input) {
    const dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1], // left
    ];
    const dir_map = {
        '^': 0,
        '<': 3,
        '>': 1,
    };
    let curr_direction = 0;
    let found_start = false;
    let curr_coord = [0, 0];
    for (let row = 0; row < input.length; row++) {
        if (found_start) {
            break;
        }
        for (let column = 0; column < input[row].length; column++) {
            switch (input[row][column]) {
                case '#':
                    continue;
                case '.':
                    continue;
                default:
                    // @ts-ignore
                    curr_direction = dir_map[input[row][column]];
                    curr_coord = [row, column];
                    found_start = true;
                    break;
            }
        }
    }
    const visited = [];
    for (let row = 0; row < input.length; row++) {
        visited.push(new Array(input[row].length).fill(false));
    }
    // Set the starting location
    visited[curr_coord[0]][curr_coord[1]] = true;
    // Iterative method
    while (true) {
        const [x, y] = [
            curr_coord[0] + dirs[curr_direction][0],
            curr_coord[1] + dirs[curr_direction][1],
        ];
        if (x < 0 || x > input.length - 1 || y < 0 || y > input[x].length - 1) {
            break;
        }
        const next_map_val = input[x][y];
        switch (next_map_val) {
            case '#':
                if (curr_direction === 3) {
                    curr_direction = 0;
                }
                else {
                    curr_direction++;
                }
                continue;
            case '^':
            case '>':
            case '<':
            case '.':
                visited[x][y] = true;
                curr_coord = [x, y];
                continue;
        }
    }
    // Count the number of true in the visited
    let visited_squares = 0;
    for (let row = 0; row < visited.length; row++) {
        for (let column = 0; column < visited[row].length; column++) {
            if (visited[row][column]) {
                visited_squares++;
            }
        }
    }
    return visited_squares;
}
exports.day_six_part_one = day_six_part_one;
//# sourceMappingURL=part_one.js.map