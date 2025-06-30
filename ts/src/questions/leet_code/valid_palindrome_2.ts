// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

export function validPalindromeTwo(s: string): boolean {
  // base
  if (isPalindrome(s)[0] === -1) {
    return true;
  }

  if (isPalindrome(s.substring(1))[0] === -1) {
    return true;
  }

  if (isPalindrome(s.substring(0, s.length - 1))[0] === -1) {
    return true;
  }

  const [left] = isPalindrome(s);
  const leftRemoved = s.substring(left, s.length - (left + 1));
  const rightRemoved = s.substring(left + 1, s.length - left);

  if (
    isPalindrome(leftRemoved)[0] === -1 ||
    isPalindrome(rightRemoved)[0] === -1
  ) {
    return true;
  }

  return false;
}

function isPalindrome(s: string): [number] {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer <= rightPointer) {
    if (s[leftPointer] != s[rightPointer]) {
      return [leftPointer];
    }

    leftPointer++;
    rightPointer--;
  }

  return [-1];
}
