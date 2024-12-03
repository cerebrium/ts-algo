"use strict";
/*

Rules:
1. The levels are either all increasing or all decreasing.
2. Any two adjacent levels differ by at least one and at most three.

EX:
7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.

So, in this example, 2 reports are safe.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_two_part_one = exports.test_data = void 0;
exports.test_data = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
];
/**
 *
 * day_two_part_one takes one arg
 *
 */
function day_two_part_one(data) {
    let safe_reports = 0;
    for (let report = 0; report < data.length; report++) {
        let prev = data[report][0];
        let mistakes = 0;
        let unsafe = false;
        if (prev < data[report][1]) {
            // greater path
            for (let i = 1; i < data[report].length; i++) {
                if (data[report][i] <= prev) {
                    mistakes++;
                    if (mistakes > 1) {
                        unsafe = true;
                        break;
                    }
                    prev = data[report][i];
                    continue;
                }
                if (data[report][i] - prev > 3) {
                    mistakes++;
                    if (mistakes > 1) {
                        unsafe = true;
                        break;
                    }
                    prev = data[report][i];
                    continue;
                }
                prev = data[report][i];
            }
            if (unsafe) {
                console.log('fail: \n', data[report], '\n report: ', report, '\n ------------ \n');
                continue;
            }
            console.log('success: \n', data[report], '\n report: ', report, '\n ------------ \n');
            safe_reports++;
            continue;
        }
        // less path
        for (let i = 0; i < data[report].length; i++) {
            if (data[report][i] >= prev) {
                mistakes++;
                if (mistakes > 1) {
                    unsafe = true;
                    break;
                }
                prev = data[report][i];
                continue;
            }
            if (prev - data[report][i] > 3) {
                mistakes++;
                if (mistakes > 1) {
                    unsafe = true;
                    break;
                }
                prev = data[report][i];
                continue;
            }
            prev = data[report][i];
        }
        if (unsafe) {
            console.log('fail: \n', data[report], '\n report: ', report, '\n ------------ \n');
            continue;
        }
        console.log('success: \n ', data[report], '\n report: ', report, '\n ------------ \n');
        safe_reports++;
    }
    return safe_reports;
}
exports.day_two_part_one = day_two_part_one;
//# sourceMappingURL=code.js.map