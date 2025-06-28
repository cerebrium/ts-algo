// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//
//
// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

export function isPalindrome(s: string): boolean {
  const workableStr = s
    .replace(/[^a-zA-Z\d]/g, '')
    .trim()
    .toLowerCase();

  if (!workableStr.length) {
    return true;
  }

  let endPoint = workableStr.length - 1;
  let startPoint = 0;

  while (endPoint >= startPoint) {
    if (workableStr[endPoint] !== workableStr[startPoint]) {
      return false;
    }

    startPoint++;
    endPoint--;
  }

  return true;
}
