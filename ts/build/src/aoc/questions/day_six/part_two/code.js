"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaySixPartTwo = void 0;
var State;
(function (State) {
    State["CONTINUE"] = "continue";
    State["CHANGE_DIRECTION"] = "change_direction";
    State["BREAK"] = "BREAK";
})(State || (State = {}));
class DaySixPartTwo {
    constructor(input) {
        this.distinct_loops = 0;
        this._coords = {
            up: [-1, 0],
            down: [1, 0],
            right: [0, 1],
            left: [0, -1],
        };
        this._next_coord = {
            up: 'right',
            right: 'down',
            down: 'left',
            left: 'up',
        };
        this._current_direction = 'up';
        this._reverse = {
            up: 'down',
            down: 'up',
            right: 'left',
            left: 'right',
        };
        this._obstacles_hit = {
            left: [],
            right: [],
            down: [],
            up: [],
        };
        this._possible_axis_loops = [];
        this._input = input;
    }
    _day_six_part_one() {
        let current_location = null;
        // Find 2
        for (let i = 0; i < this._input.length; i++) {
            for (let x = 0; x < this._input[i].length; x++) {
                if (this._input[i][x] === 2) {
                    current_location = [i, x];
                    this._starting_location = [i, x];
                }
            }
        }
        if (!current_location) {
            throw new Error('no starting coordinate.');
        }
        this._input[current_location[0]][current_location[1]] = 0;
        // Apply first walk
        current_location = [current_location[0] - 1, current_location[1]];
        // While walk returns true... continue
        // If not true:
        // 1. determine state
        //   - change direction || terminate
        let current_state;
        current_state = this._walk(current_location);
        while (current_state !== State.BREAK) {
            switch (current_state) {
                case State.CHANGE_DIRECTION:
                    // Apply the reverse
                    const [r_x, r_y] = 
                    // @ts-ignore
                    this._coords[this._reverse[this._current_direction]];
                    current_location = [
                        current_location[0] + r_x,
                        current_location[1] + r_y,
                    ];
                    // @ts-ignore
                    this._current_direction = this._next_coord[this._current_direction];
                    const coords = 
                    // @ts-ignore
                    this._coords[this._current_direction];
                    current_location = [
                        current_location[0] + coords[0],
                        current_location[1] + coords[1],
                    ];
                    current_state = this._walk(current_location);
                    break;
                case State.CONTINUE:
                    const coords_continue = 
                    // @ts-ignore
                    this._coords[this._current_direction];
                    current_location = [
                        current_location[0] + coords_continue[0],
                        current_location[1] + coords_continue[1],
                    ];
                    current_state = this._walk(current_location);
            }
        }
    }
    // There is a possibility that anywhere along the axis where we started,
    // if the node is incoming from the right going left, that it could restart
    // the whole loop. To find this, we will add a check that looks for crossing
    // the starting axis in a leftward direction and then check walk each to see
    // if a loop has been created.
    _walk(coords) {
        const [x, y] = coords;
        if (x < 0 ||
            y < 0 ||
            x > this._input.length - 1 ||
            y > this._input[0].length - 1) {
            return State.BREAK;
        }
        const is_wall = this._input[x][y];
        // If left and
        if (this._current_direction === 'left' &&
            y === this._starting_location[1] - 1 &&
            x !== this._starting_location[0]) {
            this._possible_axis_loops.push([x, y]);
        }
        if (is_wall) {
            // @ts-ignore
            this._obstacles_hit[this._current_direction].push([x, y]);
            return State.CHANGE_DIRECTION;
        }
        return State.CONTINUE;
    }
    day_six_part_two() {
        let possible_loops = 0;
        this._day_six_part_one();
        let directions_above_zero = 0;
        for (const direction in this._obstacles_hit) {
            if (direction.length > 0) {
                directions_above_zero++;
            }
        }
        if (directions_above_zero < 3) {
            throw new Error('no obstacles hit');
        }
        const loopalbes = new Set();
        // Solve for all possible loops
        for (let i = 0; i < this._obstacles_hit.left.length; i++) {
            const is_loopable = this._has_left_and_right(this._obstacles_hit.left[i], 'l');
            if (is_loopable && !loopalbes.has(is_loopable.join(','))) {
                loopalbes.add(is_loopable.join(','));
            }
        }
        for (let i = 0; i < this._obstacles_hit.right.length; i++) {
            const is_loopable = this._has_left_and_right(this._obstacles_hit.right[i], 'r');
            if (is_loopable && !loopalbes.has(is_loopable.join(','))) {
                loopalbes.add(is_loopable.join(','));
            }
        }
        for (let i = 0; i < this._obstacles_hit.down.length; i++) {
            const is_loopable = this._has_left_and_right(this._obstacles_hit.down[i], 'd');
            if (is_loopable && !loopalbes.has(is_loopable.join(','))) {
                loopalbes.add(is_loopable.join(','));
            }
        }
        for (let i = 0; i < this._obstacles_hit.up.length; i++) {
            const is_loopable = this._has_left_and_right(this._obstacles_hit.up[i], 'u');
            if (is_loopable && !loopalbes.has(is_loopable.join(','))) {
                loopalbes.add(is_loopable.join(','));
            }
        }
        this.distinct_loops += loopalbes.size;
        this.distinct_loops += this._possible_axis_loops.length;
        return this.distinct_loops;
    }
    _has_left_and_right(coord, dir) {
        let has_both = [false, false];
        const [x, y] = coord;
        switch (dir) {
            case 'u':
                for (let i = 0; i < this._obstacles_hit['right'].length; i++) {
                    const wall = this._obstacles_hit['right'][i];
                    // u_r -> [-1, y < yn]
                    if (wall[0] === x - 1 && wall[1] > y) {
                        has_both[0] = '' + wall[0] + wall[1];
                    }
                }
                for (let i = 0; i < this._obstacles_hit['left'].length; i++) {
                    const wall = this._obstacles_hit['left'][i];
                    // u_left -> [x < xn, -1]
                    if (x < wall[0] && wall[1] === y - 1) {
                        has_both[1] = '' + wall[0] + wall[1];
                    }
                }
                break;
            case 'l':
                for (let i = 0; i < this._obstacles_hit['up'].length; i++) {
                    const wall = this._obstacles_hit['up'][i];
                    // l_u  [x > xn, +1]
                    if (x > wall[0] && y + 1 === wall[1]) {
                        has_both[0] = '' + wall[0] + wall[1];
                    }
                }
                for (let i = 0; i < this._obstacles_hit['down'].length; i++) {
                    const wall = this._obstacles_hit['down'][i];
                    // l_d  [+1, y < yn]
                    if (wall[0] === x + 1 && y < wall[1]) {
                        has_both[1] = '' + wall[0] + wall[1];
                    }
                }
                break;
            case 'r':
                for (let i = 0; i < this._obstacles_hit['down'].length; i++) {
                    const wall = this._obstacles_hit['down'][i];
                    // r_d [x < xn, -1]
                    if (x < wall[0] && y - 1 === wall[1]) {
                        has_both[0] = '' + wall[0] + wall[1];
                    }
                }
                for (let i = 0; i < this._obstacles_hit['up'].length; i++) {
                    const wall = this._obstacles_hit['up'][i];
                    // r_u [-1, y > yn]
                    if ((x - 1 === wall[0], y > wall[1])) {
                        has_both[1] = '' + wall[0] + wall[1];
                    }
                }
                break;
            case 'd':
                for (let i = 0; i < this._obstacles_hit['right'].length; i++) {
                    const wall = this._obstacles_hit['right'][i];
                    // d_r [x > xn, +1]
                    if (x > wall[0] && y + 1 === wall[1]) {
                        has_both[0] = '' + wall[0] + wall[1];
                    }
                }
                for (let i = 0; i < this._obstacles_hit['left'].length; i++) {
                    const wall = this._obstacles_hit['left'][i];
                    // d_l [+1, y > yn]
                    if (x + 1 === wall[0] && y > wall[1]) {
                        has_both[1] = '' + wall[0] + wall[1];
                    }
                }
                break;
        }
        if (has_both.some(x => !x)) {
            return false;
        }
        return has_both;
    }
}
exports.DaySixPartTwo = DaySixPartTwo;
//# sourceMappingURL=code.js.map