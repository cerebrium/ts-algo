// Given a string s of '(' , ')' and lowercase English characters.
//
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
// so that the resulting parentheses string is valid and return any valid string.
//
// Formally, a parentheses string is valid if and only if:
//
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

/*
 *
 * Steps:
 *
 * 1. Walk through and find all closing parentheses that are invalid.
 * 2. Walk through backward and find all opening parentheses that are invalid.
 * 3. Remove them
 *
 *
 */
export function minRemoveMakeValid(s: string): string {
  if (!s.length) {
    return '';
  }

  /*
   *
   * Walk through once, left to right.
   * find the ')' that don't have a '('
   * remove them, then remove the '('
   * return the string
   *
   */

  const stack: number[] = [];

  const splitStr = s.split('');

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '(') {
      stack.push(i);
      continue;
    }

    if (splitStr[i] === ')' && stack.length) {
      stack.pop();
      continue;
    }

    if (splitStr[i] === ')') {
      splitStr[i] = '';
    }
  }

  while (stack.length) {
    splitStr[stack.pop()!] = '';
  }

  return splitStr.join('');
}
