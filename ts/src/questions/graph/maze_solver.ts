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
 ex: [
    ['#', '#', '#', '#', '#', '#', '#', '#', 'E'],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['#', '#', '#', '#', '#', '#', '#', '#', ''],
    ['S', '', '', '', '', '', '', '', ''],
  ];

 *
 */

const directions: Array<[number, number]> = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function get_possible_coords(
  curr_coord: [number, number],
  bounds: [number, number]
): Array<[number, number]> {
  return directions
    .map(([x, y]) => {
      return [curr_coord[0] + x, curr_coord[1] + y];
    })
    .filter(([x, y]) => {
      return x > -1 && x < bounds[0] && y > -1 && y < bounds[1];
    }) as Array<[number, number]>;
}

export function maze_solver(maze: string[][]): number[][] | null {
  const path: Map<string, string> = new Map();
  const visited: boolean[][] = new Array(maze.length);
  for (let row = 0; row < visited.length; row++) {
    visited[row] = new Array(maze[row].length).fill(false);
  }
  const que: Array<[number, number]> = [];

  let curr_que_idx: number = 0;
  let end_coords: string | null = null;

  for (let row = 0; row < maze.length; row++) {
    for (let column = 0; column < maze[row].length; column++) {
      if (maze[row][column] === 'S') {
        que.push([row, column]);
        visited[row][column] = true;
        path.set(`${row},${column}`, 'S');
      }
    }
  }

  while (curr_que_idx < que.length) {
    const [x, y] = que[curr_que_idx];
    const possible_coords = get_possible_coords(
      [x, y],
      [maze.length, maze[x].length]
    );

    for (const [child_x, child_y] of possible_coords) {
      if (visited[child_x][child_y]) {
        continue;
      }

      visited[child_x][child_y] = true;

      if (maze[child_x][child_y] === '#') {
        continue;
      }

      path.set(`${child_x},${child_y}`, `${x},${y}`);

      if (maze[child_x][child_y] === 'E') {
        curr_que_idx = que.length + 1;
        end_coords = `${child_x},${child_y}`;
        break;
      }

      que.push([child_x, child_y]);
    }

    curr_que_idx++;
  }

  return create_final_path(path, end_coords);
}

function create_final_path(
  path: Map<string, string>,
  end_coords: string | null
): null | Array<[number, number]> {
  if (!end_coords) {
    return null;
  }

  let curr_coord = end_coords;
  let found_val = path.get(curr_coord);
  const reversed_final_path: string[] = [curr_coord];

  while (found_val && found_val !== 'S') {
    reversed_final_path.push(found_val);
    found_val = path.get(found_val);
  }

  const final_path: Array<[number, number]> = [];

  for (let i = reversed_final_path.length - 1; i > -1; i--) {
    const [x, y] = reversed_final_path[i].split(',').map(s => parseInt(s));
    final_path.push([x, y]);
  }

  return final_path;
}
