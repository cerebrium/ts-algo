"use strict";
/*
 

While The Historians begin working around the guard's patrol route, you borrow their fancy device
and step outside the lab. From the safety of a supply closet, you time travel through the last few
months and record the nightly status of the lab's guard post on the walls of the closet.

Returning after what seems like only a few seconds to The Historians, they explain that the guard's
patrol area is simply too large for them to safely search the lab without getting caught.

Fortunately, they are pretty sure that adding a single new obstruction won't cause a time paradox.
They'd like to place the new obstruction in such a way that the guard will get stuck in a loop,
making the rest of the lab safe to search.

To have the lowest chance of creating a time paradox, The Historians would like to know all of the
possible positions for such an obstruction. The new obstruction can't be placed at the guard's
starting position - the guard is there right now and would notice.

In the above example, there are only 6 different positions where a new obstruction would cause the
guard to get stuck in a loop. The diagrams of these six situations use O to mark the new obstruction,
| to show a position where the guard moves up/down, - to show a position where the guard moves
left/right, and + to show a position where the guard moves both up/down and left/right.

Option one, put a printing press next to the guard's starting position:

....#.....
....+---+#
....|...|.
..#.|...|.
....|..#|.
....|...|.
.#.O^---+.
........#.
#.........
......#...
Option two, put a stack of failed suit prototypes in the bottom right quadrant of the mapped area:


....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
......O.#.
#.........
......#...
Option three, put a crate of chimney-squeeze prototype fabric next to the standing desk in the bottom right quadrant:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----+O#.
#+----+...
......#...
Option four, put an alchemical retroencabulator near the bottom left corner:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
..|...|.#.
#O+---+...
......#...
Option five, put the alchemical retroencabulator a bit to the right instead:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
....|.|.#.
#..O+-+...
......#...
Option six, put a tank of sovereign glue right next to the tank of universal solvent:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----++#.
#+----++..
......#O..
It doesn't really matter what you choose to use as an obstacle so long as you and The Historians can put it into position without the guard noticing. The important thing is having enough options that you can find one that minimizes time paradoxes, and in this example, there are 6 different positions you could choose.

You need to get the guard stuck in a loop by adding a single new obstruction. How many different positions could you choose for this obstruction?


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_six_part_two = void 0;
function day_six_part_two(input) {
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
    const rows_map = new Map();
    const columns_map = new Map();
    for (let row = 0; row < input.length; row++) {
        if (found_start) {
            break;
        }
        for (let column = 0; column < input[row].length; column++) {
            switch (input[row][column]) {
                case '#':
                    const curr_rows = rows_map.get(row);
                    const curr_columns = columns_map.get(column);
                    if (!curr_rows) {
                        rows_map.set(row, [column]);
                    }
                    else {
                        rows_map.set(row, [...curr_rows, column]);
                    }
                    if (!curr_columns) {
                        columns_map.set(column, [row]);
                    }
                    else {
                        columns_map.set(column, [...curr_columns, row]);
                    }
                    continue;
                case '.':
                    continue;
                default:
                    // @ts-ignore
                    curr_direction = dir_map[input[row][column]];
                    curr_coord = [row, column];
            }
        }
    }
    console.log('the column: ', columns_map);
    console.log('the rows: ', rows_map);
    // Sort the walls maps
    rows_map.forEach(v => {
        v.sort((a, b) => (a > b ? -1 : 1));
    });
    columns_map.forEach(v => {
        v.sort((a, b) => (a > b ? -1 : 1));
    });
    let has_changed_dir = 0;
    let answer = 0;
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
                has_changed_dir++;
                continue;
            case '^':
            case '>':
            case '<':
            case '.':
                if (check_if_can_add_wall([x + dirs[curr_direction][0], y + dirs[curr_direction][1]], rows_map, columns_map, curr_direction, input)) {
                    answer++;
                }
                curr_coord = [x, y];
                continue;
        }
    }
    return answer;
}
exports.day_six_part_two = day_six_part_two;
function check_if_can_add_wall(curr_coord, rows_map, columns_map, curr_dir, input) {
    // 0 = up
    // 1 = right
    // 2 = down
    // 3 = left
    /*
     *
     * Checks:
     * 1. If curr direction has wall in previous path
     * 2. It has wall in its next change of direction path
     *
     */
    const [x, y] = curr_coord;
    const rows = rows_map.get(x);
    const columns = columns_map.get(y);
    let should_be_loop = false;
    if (x === 6 && y === 3) {
        should_be_loop = true;
        console.log('THIS SHOULD BE A LOOP');
        console.log('rows: ', rows);
        console.log('columns: ', columns);
    }
    // Early return, missing a wall
    if (!rows || !columns) {
        return false;
    }
    let previous_row_wall;
    let previous_column_wall;
    let third_wall;
    // We want to check if there is a wall where we came from,
    // and where we are going
    //
    // If greater column, then we want to check if there is a
    // wall in the column greater than our current column
    //
    // If greater row, then we want to check if there is a
    // wall in the rows greater than our row
    switch (curr_dir) {
        case 0:
            for (let row = 0; row < columns.length; row++) {
                if (columns[row] > x) {
                    previous_column_wall = [columns[row], y];
                }
            }
            for (let column = 0; column < rows.length; column++) {
                if (rows[column] > y) {
                    previous_row_wall = [x, rows[column]];
                }
            }
            if (previous_row_wall && previous_column_wall) {
                third_wall = [previous_column_wall[0], previous_row_wall[1]];
            }
            break;
        case 1:
            for (let row = 0; row < columns.length; row++) {
                if (columns[row] > x) {
                    previous_column_wall = [columns[row], y];
                }
            }
            for (let column = 0; column < rows.length; column++) {
                if (rows[column] < y) {
                    previous_row_wall = [x, rows[column]];
                }
            }
            if (previous_row_wall && previous_column_wall) {
                third_wall = [previous_column_wall[0], previous_row_wall[1]];
            }
            break;
        case 2:
            for (let row = 0; row < columns.length; row++) {
                if (columns[row] < x) {
                    previous_column_wall = [columns[row], y];
                }
            }
            for (let column = 0; column < rows.length; column++) {
                if (rows[column] < y) {
                    previous_row_wall = [x, rows[column]];
                }
            }
            if (previous_row_wall && previous_column_wall) {
                third_wall = [previous_column_wall[0], previous_row_wall[1]];
            }
            break;
        case 3:
            for (let row = 0; row < columns.length; row++) {
                if (columns[row] < x) {
                    previous_column_wall = [columns[row], y];
                }
            }
            for (let column = 0; column < rows.length; column++) {
                if (rows[column] > y) {
                    previous_row_wall = [x, rows[column]];
                }
            }
            if (previous_row_wall && previous_column_wall) {
                third_wall = [previous_column_wall[0], previous_row_wall[1]];
            }
    }
    if (should_be_loop) {
        console.log('previous_row_wall: ', previous_row_wall);
        console.log('previous_column_wall: ', previous_column_wall);
    }
    if (previous_column_wall &&
        input[previous_column_wall[0]][previous_column_wall[1]] !== '#') {
        console.log('previous_column_wall: ', previous_column_wall);
    }
    if (previous_row_wall &&
        input[previous_row_wall[0]][previous_row_wall[1]] !== '#') {
        console.log('previous_row_wal: ', previous_row_wall);
    }
    // We have two walls found, now we check for the third.
    // console.log('third wall: ', third_wall);
    if (!third_wall) {
        return false;
    }
    return input[third_wall[0]][third_wall[1]] === '#' ? true : false;
}
//# sourceMappingURL=part_two.js.map