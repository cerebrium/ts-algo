// A string can be abbreviated by replacing any number of non-adjacent,
// non-empty substrings with their lengths. The lengths should not have leading zeros.
//
// For example, a string such as "substitution" could be abbreviated as (but not limited to):
//
// "s10n" ("s ubstitutio n")
// "sub4u4" ("sub stit u tion")
// "12" ("substitution")
// "su3i1u2on" ("su bst i t u ti on")
// "substitution" (no substrings replaced)
// The following are not valid abbreviations:
//
// "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
// "s010n" (has leading zeros)
// "s0ubstitution" (replaces an empty substring)
// Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.
//
// A substring is a contiguous non-empty sequence of characters within a string.
export function validWordAbbreviation(word: string, abbr: string): boolean {
  const splitAbbr = abbr.match(/[a-zA-Z]+|\d+/g);

  if (!splitAbbr) {
    return true;
  }

  let strIdx = 0;
  for (const split of splitAbbr) {
    if (isNaN(parseInt(split))) {
      // Is string must match each one
      for (let i = 0; i < split.length; i++) {
        if (word[strIdx] !== split[i]) {
          return false;
        }
        strIdx++;
      }
      continue;
    }

    if (split.charAt(0) === '0') {
      return false;
    }

    // is number
    const jump = parseInt(split);
    if (strIdx + jump > word.length) {
      return false;
    }

    strIdx += jump;
  }

  if (strIdx < word.length) {
    return false;
  }

  return true;
}
