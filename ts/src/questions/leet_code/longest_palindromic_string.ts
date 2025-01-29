/*
  Given a string s, return the longest 
  palindromic
  
  substring
  in s.

  
------------------------------------------------
  Example 1:

  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.

------------------------------------------------
  Example 2:

  Input: s = "cbbd"
  Output: "bb"
  

  Constraints:

  1 <= s.length <= 1000
  s consist of only digits and English letters.
*/

/*
 * Some chatgpt stuff here. Honestly this is a solved problem, and I
 * don't feel like answering this.
 */
export function longestPalindrome(s: string): string {
  if (s.length === 0) return '';

  // Transform the string to handle even-length palindromes
  const transformed = `#${s.split('').join('#')}#`;

  const n = transformed.length;

  const p: number[] = new Array(n).fill(0);

  let center = 0,
    right = 0;

  for (let i = 0; i < n; i++) {
    const mirror = 2 * center - i;

    if (i < right) {
      p[i] = Math.min(right - i, p[mirror]);
    }

    while (
      i + p[i] + 1 < n &&
      i - p[i] - 1 >= 0 &&
      transformed[i + p[i] + 1] === transformed[i - p[i] - 1]
    ) {
      p[i]++;
    }

    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
  }

  let maxLen = 0,
    centerIndex = 0;
  for (let i = 0; i < n; i++) {
    if (p[i] > maxLen) {
      maxLen = p[i];
      centerIndex = i;
    }
  }

  // Extract the longest palindromic substring from the original string
  const start = Math.floor((centerIndex - maxLen) / 2);
  return s.substring(start, start + maxLen);
}
