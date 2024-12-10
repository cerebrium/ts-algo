enum State {
  'CONTINUE' = 'continue',
  'CHANGE_DIRECTION' = 'change_direction',
  'BREAK' = 'BREAK',
}

export class DaySix {
  public distinct_spots = 0;
  private _input: Array<number[]>;
  private _coords = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };
  private _next_coord = {
    up: 'right',
    right: 'down',
    down: 'left',
    left: 'up',
  };
  private _current_direction = 'up';
  private _reverse = {
    up: 'down',
    down: 'up',
    right: 'left',
    left: 'right',
  };
  private _visited: Array<number[]>;

  constructor(input: Array<number[]>) {
    this._input = input;
    this._visited = [];

    for (let i = 0; i < input.length; i++) {
      this._visited.push([]);
      for (let x = 0; x < input[i].length; x++) {
        this._visited[i].push(0);
      }
    }
  }

  public day_six_part_one() {
    let current_location: [number, number] | null = null;

    // Find 2
    for (let i = 0; i < this._input.length; i++) {
      for (let x = 0; x < this._input[i].length; x++) {
        if (this._input[i][x] === 2) {
          current_location = [i, x];
        }
      }
    }

    if (!current_location) {
      throw new Error('no starting coordinate.');
    }

    this._input[current_location[0]][current_location[1]] = 0;
    this._visited[current_location[0]][current_location[1]] = 1;

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

          const coords: [number, number] =
            // @ts-ignore
            this._coords[this._current_direction];

          current_location = [
            current_location[0] + coords[0],
            current_location[1] + coords[1],
          ];

          current_state = this._walk(current_location);
          break;
        case State.CONTINUE:
          const coords_continue: [number, number] =
            // @ts-ignore
            this._coords[this._current_direction];

          current_location = [
            current_location[0] + coords_continue[0],
            current_location[1] + coords_continue[1],
          ];

          current_state = this._walk(current_location);
      }
    }

    this._count_distinct();
  }

  private _count_distinct() {
    for (let i = 0; i < this._visited.length; i++) {
      for (let x = 0; x < this._visited[i].length; x++) {
        if (this._visited[i][x]) {
          ++this.distinct_spots;
        }
      }
    }
  }

  private _walk(coords: [number, number]): State {
    const [x, y] = coords;

    if (
      x < 0 ||
      y < 0 ||
      x > this._input.length - 1 ||
      y > this._input[0].length - 1
    ) {
      return State.BREAK;
    }

    const is_wall = this._input[x][y];

    if (is_wall) {
      return State.CHANGE_DIRECTION;
    }

    this._visited[x][y] = 1;
    return State.CONTINUE;
  }
}
