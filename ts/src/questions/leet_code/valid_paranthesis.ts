/*

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.

*/

type BracketStackType = '{' | '(' | '[';

export function isValidParenthesis(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  if (s.length === 1) {
    return false;
  }

  const bracket_stack: Array<BracketStackType> = [];
  // Type guard to narrow type to BracketStackType

  const left_brackets: Array<BracketStackType> = ['(', '{', '['];

  const bracket_map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    if (left_brackets.includes(s[i] as BracketStackType)) {
      bracket_stack.push(s[i] as BracketStackType);
      continue;
    }

    const comparison = bracket_stack.pop();
    if (!comparison) {
      return false;
    }

    if (bracket_map[s[i] as keyof typeof bracket_map] === comparison) {
      continue;
    }

    return false;
  }

  if (bracket_stack.length > 0) {
    return false;
  }

  return true;
}
