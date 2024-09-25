"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crystal_ball_1 = require("../questions/crystal_ball");
/*
 *
 * Two crystal balls are dropped from the same height. Determine where
 * They will break.
 *
 * Expects function:
 * Args: array<boolean>
 *
 * Best case scenario:
 * O(sqrt(n))
 *
 */
test('Crystal Ball', () => {
    const test_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
    console.time('small_crystal_ball');
    expect((0, crystal_ball_1.crystal_ball)(test_data)).toBe(9);
    console.timeEnd('small_crystal_ball');
    const big_test_data = new Array(90000000).fill(0);
    for (let i = big_test_data.length - 100; i < big_test_data.length; i++) {
        big_test_data[i] = 1;
    }
    console.time('big_crystal_ball');
    expect((0, crystal_ball_1.crystal_ball)(big_test_data)).toBe(89999900);
    console.timeEnd('big_crystal_ball');
});
test('Fast Crystal Ball', () => {
    const test_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
    console.time('small_crystal_ball');
    expect((0, crystal_ball_1.crystal_ball_fast)(test_data)).toBe(9);
    console.timeEnd('small_crystal_ball');
    const big_test_data = new Array(90000000).fill(0);
    for (let i = big_test_data.length - 100; i < big_test_data.length; i++) {
        big_test_data[i] = 1;
    }
    console.time('big_crystal_ball');
    expect((0, crystal_ball_1.crystal_ball_fast)(big_test_data)).toBe(89999900);
    console.timeEnd('big_crystal_ball');
});
//# sourceMappingURL=crystal_ball.test.js.map