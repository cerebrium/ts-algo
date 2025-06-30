"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumSwap = void 0;
// TODO: Make this optimized
function maximumSwap(num) {
    const splitNum = num
        .toString()
        .split('')
        .map(x => parseInt(x));
    if (!num) {
        return 0;
    }
    if (splitNum.length === 1) {
        return num;
    }
    for (let i = 0; i < splitNum.length - 1; i++) {
        const maxPossibleRightNum = Math.max(...splitNum.slice(i + 1));
        if (maxPossibleRightNum > splitNum[i]) {
            for (let x = splitNum.length - 1; x > i; x--) {
                if (splitNum[x] === maxPossibleRightNum) {
                    [splitNum[x], splitNum[i]] = [splitNum[i], splitNum[x]];
                    return parseInt(splitNum.join(''));
                }
            }
        }
    }
    return num;
}
exports.maximumSwap = maximumSwap;
//# sourceMappingURL=maximum_swap.js.map