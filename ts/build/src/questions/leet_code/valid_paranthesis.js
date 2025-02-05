"use strict";
/*

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidParenthesis = void 0;
function isValidParenthesis(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    let left = [];
    let right = [];
    const left_options = ['(', '{', '['];
    const right_options = [')', '}', ']'];
    for (let i = 0; i < s.length; i++) {
        const left_idx = left_options.indexOf(s[i]);
        if (left_idx >= 0) {
            // If we have a match remove it, continue
            if (right.length &&
                right_options.indexOf(right[right.length - 1]) === left_idx) {
                right.pop();
                continue;
            }
            left.push(s[i]);
            continue;
        }
        // Left has to come first
        if (!left.length ||
            left_options.indexOf(left[left.length - 1]) !==
                right_options.indexOf(s[i])) {
            return false;
        }
        left.pop();
    }
    if (right.length || left.length) {
        return false;
    }
    return true;
}
exports.isValidParenthesis = isValidParenthesis;
//# sourceMappingURL=valid_paranthesis.js.map