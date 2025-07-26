"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battleship_1 = require("../../questions/leet_code/battleship");
test('battleship', () => {
    const board = [
        ['X', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
    ];
    const res = (0, battleship_1.countBattleships)(board);
    const output = 2;
    expect(res).toEqual(2);
});
test('battleship', () => {
    const board = [['.']];
    const res = (0, battleship_1.countBattleships)(board);
    const output = 0;
    expect(res).toEqual(0);
});
//# sourceMappingURL=battleship.test.js.map