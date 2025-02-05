"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_large_maze_1 = require("../../questions/leet_code/escape_large_maze");
test('escape_large_maze', () => {
    /*
  
      Example 1:
  
      Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
      Output: false
      Explanation: The target square is inaccessible starting from the source square because we cannot move.
      We cannot move north or east because those squares are blocked.
      We cannot move south or west because we cannot go outside of the grid.
  
  
  
      Example 2:
  
      Input: blocked = [], source = [0,0], target = [999999,999999]
      Output: true
      Explanation: Because there are no blocked cells, it is possible to reach the target square.
  
    */
    let answer = (0, escape_large_maze_1.isEscapePossible)([
        [0, 1],
        [1, 0],
    ], [0, 0], [0, 2]);
    expect(answer).toBeFalsy();
    answer = (0, escape_large_maze_1.isEscapePossible)([], [0, 0], [999999, 999999]);
    expect(answer).toBeTruthy();
});
//# sourceMappingURL=escape_large_maze.test.js.map