import {isValidParenthesis} from '../../questions/leet_code/valid_paranthesis';

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
  let answer = isValidParenthesis('()');
  expect(answer).toBeTruthy();

  answer = isValidParenthesis('()[]{}');
  expect(answer).toBeTruthy();

  answer = isValidParenthesis('(]');
  expect(answer).toBeFalsy();

  answer = isValidParenthesis('([])');
  expect(answer).toBeTruthy();

  answer = isValidParenthesis('((');
  expect(answer).toBeFalsy();

  answer = isValidParenthesis('(){}}{');
  expect(answer).toBeFalsy();

  answer = isValidParenthesis('(}{)');
  expect(answer).toBeFalsy();
});
