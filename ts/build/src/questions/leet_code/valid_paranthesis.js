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
    if (s.length === 0) {
        return true;
    }
    if (s.length === 1) {
        return false;
    }
    const bracket_stack = [];
    // Type guard to narrow type to BracketStackType
    const left_brackets = ['(', '{', '['];
    const bracket_map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (let i = 0; i < s.length; i++) {
        if (left_brackets.includes(s[i])) {
            bracket_stack.push(s[i]);
            continue;
        }
        const comparison = bracket_stack.pop();
        if (!comparison) {
            return false;
        }
        if (bracket_map[s[i]] === comparison) {
            continue;
        }
        return false;
    }
    if (bracket_stack.length > 0) {
        return false;
    }
    return true;
}
exports.isValidParenthesis = isValidParenthesis;
//# sourceMappingURL=valid_paranthesis.js.map