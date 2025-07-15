"use strict";
// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.
//
// Battleships can only be placed horizontally or vertically on board.
// In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size.
// At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBattleships = void 0;
function countBattleships(board) {
    let battleShipCount = 0;
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            if (board[row][column] === 'X' &&
                (row === 0 || board[row - 1][column] !== 'X') &&
                (column === 0 || board[row][column - 1] !== 'X')) {
                battleShipCount++;
            }
        }
    }
    return battleShipCount;
}
exports.countBattleships = countBattleships;
//# sourceMappingURL=battleship.js.map