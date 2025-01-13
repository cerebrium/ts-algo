export class DayTenTwo {
  private data: Array<number[]> = [];
  private trailheads: number = 0;
  private directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
  ];
  private order: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  public init(input: Array<number[]>) {
    this.data = input;
  }

  public find_trailheads(): number {
    for (let row = 0; row < this.data.length; ++row) {
      for (let column = 0; column < this.data[row].length; ++column) {
        const node = this.data[row][column];

        if (node === 0) {
          const directions = this.directions.map(
            ([transform_x, transform_y]) => {
              return [row + transform_x, column + transform_y];
            }
          );

          for (const direction of directions) {
            this._walk(direction, 0);
          }
        }
      }
    }

    return this.trailheads;
  }

  private _walk(coord: number[], order_position: number): void {
    // Base cases
    if (
      coord[0] < 0 ||
      coord[1] < 0 ||
      coord[0] > this.data.length - 1 ||
      coord[1] > this.data[0].length - 1
    ) {
      return;
    }

    if (this.data[coord[0]][coord[1]] !== this.order[order_position]) {
      return;
    }

    if (this.order[order_position] === 9) {
      this.trailheads += 1;

      return;
    }

    // Recurse
    const directions = this.directions.map(([transform_x, transform_y]) => {
      return [coord[0] + transform_x, coord[1] + transform_y];
    });

    for (let direction of directions) {
      this._walk(direction, order_position + 1);
    }
  }
}
