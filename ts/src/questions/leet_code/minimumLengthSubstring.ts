// Minimum Length Substrings
// You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring.
// Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
// Signature
// int minLengthSubstring(String s, String t)
// Input
// s and t are non-empty strings that contain less than 1,000,000 characters each
// Output
// Return the minimum length of the substring of s. If it is not possible, return -1
export function minLengthSubstring(s: string, t: string): number {
  if (t.length > s.length) {
    return -1;
  }

  let count = Number.MAX_SAFE_INTEGER;

  const tLetCount: Map<string, number> = new Map();
  for (let i = 0; i < t.length; i++) {
    const hasT = tLetCount.get(t[i]);

    if (!hasT) {
      tLetCount.set(t[i], 1);
      continue;
    }

    tLetCount.set(t[i], hasT + 1);
  }

  let start = 0;
  let currCount = 0;
  const currWindowCount: Map<string, number> = new Map();

  for (let end = 0; end < s.length; end++) {
    const tCount = tLetCount.get(s[end]);

    if (tCount) {
      currWindowCount.set(s[end], (currWindowCount.get(s[end]) || 0) + 1);

      if (currWindowCount.get(s[end])! === tCount) {
        currCount++;
      }
    }

    while (currCount === tLetCount.size) {
      const hasTLet = tLetCount.get(s[start]);

      if (!hasTLet) {
        start++;
        continue;
      }

      count = Math.min(count, end - start + 1);

      // Otherwise we have a letter that invalidates the window
      currWindowCount.set(s[start], currWindowCount.get(s[start])! - 1);
      currCount--;
      break;
    }
  }

  return count === Number.MAX_SAFE_INTEGER ? -1 : count;
}
