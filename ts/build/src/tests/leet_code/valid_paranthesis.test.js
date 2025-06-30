"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valid_paranthesis_1 = require("../../questions/leet_code/valid_paranthesis");
test('valid_parenthesis', () => {
    /*
  
      Example 1:
      Input: s = "()"
      Output: true
  
      Example 2:
      Input: s = "()[]{}"
      Output: true
  
      Example 3:
      Input: s = "(]"
      Output: false
  
      Example 4:
      Input: s = "([])"
      Output: true
  
    */
    let answer = (0, valid_paranthesis_1.isValidParenthesis)('()');
    expect(answer).toBeTruthy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('()[]{}');
    expect(answer).toBeTruthy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('(]');
    expect(answer).toBeFalsy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('([])');
    expect(answer).toBeTruthy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('((');
    expect(answer).toBeFalsy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('(){}}{');
    expect(answer).toBeFalsy();
    answer = (0, valid_paranthesis_1.isValidParenthesis)('(}{)');
    expect(answer).toBeFalsy();
});
//# sourceMappingURL=valid_paranthesis.test.js.map