"use strict";
/**
 *
 * This day was bugged out -> might be correct, might not
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_two_part_two = void 0;
function day_two_part_two(data) {
    let safe_reports = 0;
    /*
     *
     * For each row if there is an offending value,
     * and we remove the value does it make the row
     * true.
     *
     * The naive (inefficient) way to do this is with
     * a triple loop. We can go through each row n times
     * and take out one element each time. If any of them
     * are safe then it is a win
     *
     */
    for (let row = 0; row < data.length; row++) {
        // for each of the elements remove one and check
        for (let i = 0; i < data[row].length; i++) {
            const is_unsafe_bool = is_unsafe(data[row], i);
            if (!is_unsafe_bool) {
                safe_reports++;
                break;
            }
        }
    }
    return safe_reports;
}
exports.day_two_part_two = day_two_part_two;
function is_unsafe(data, discard) {
    const local_arr = [];
    for (let i = 0; i < data.length; i++) {
        if (i === discard) {
            continue;
        }
        local_arr.push(data[i]);
    }
    let prev = local_arr[0];
    if (local_arr[1] > prev) {
        // ascending
        for (let i = 0; i < local_arr.length; i++) {
            if (local_arr[i] < prev) {
                return true;
            }
            if (local_arr[i] - prev > 3) {
                return true;
            }
            prev = local_arr[i];
        }
        return false;
    }
    for (let i = 0; i < local_arr.length; i++) {
        if (local_arr[i] > prev) {
            return true;
        }
        if (prev - local_arr[i] > 3) {
            return true;
        }
        return false;
    }
    return false;
}
//# sourceMappingURL=code.js.map