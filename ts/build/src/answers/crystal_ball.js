"use strict";
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
 * Wosrst case scenario:
 * O(n)
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystal_ball = exports.crystal_ball_fast = void 0;
function crystal_ball_fast(arr) {
    const sqrt = Math.floor(Math.sqrt(arr.length));
    for (let i = 0; i < arr.length; i += sqrt) {
        if (arr[i] !== 1) {
            continue;
        }
        const start = i - sqrt;
        for (let i = start; i < arr.length; i++) {
            if (arr[i] === 1) {
                return i;
            }
        }
    }
    // Check end edge case
    if (arr[arr.length - 1] === 1) {
        const start = arr.length - sqrt;
        for (let i = start; i < arr.length; i++) {
            if (arr[i] === 1) {
                return i;
            }
        }
        return 0;
    }
    return 0;
}
exports.crystal_ball_fast = crystal_ball_fast;
function crystal_ball(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            return i;
        }
    }
    return 0;
}
exports.crystal_ball = crystal_ball;
//# sourceMappingURL=crystal_ball.js.map