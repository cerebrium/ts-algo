// One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount.
// Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?".
// Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A),
// and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0).
// Note that the non-alphanumeric characters remain unchanged.
//
// Given a string and a rotation factor, return an encrypted string.
//
// Signature
// string rotationalCipher(string input, int rotationFactor)
//
// ((charCode - base + rotationFactor) % 26) + base
//
// const rotationFactor = 1000000;
//
// const rotatedChar = ((65 - 65 + 1000000) % 26) + 65;
// => (0 + 1000000) % 26 = 8 → 65 + 8 = 73 → 'I'

export function rotationalCipher(input: string, rotationFactor: number) {
  let result = '';

  for (const char of input) {
    const code = char.charCodeAt(0);

    // Capital letters: A-Z (65–90)
    if (code >= 65 && code <= 90) {
      const rotated = ((code - 65 + rotationFactor) % 26) + 65;
      result += String.fromCharCode(rotated);
    }
    // Lowercase letters: a–z (97–122)
    else if (code >= 97 && code <= 122) {
      const rotated = ((code - 97 + rotationFactor) % 26) + 97;
      result += String.fromCharCode(rotated);
    }
    // Numbers: 0–9 (48–57)
    else if (code >= 48 && code <= 57) {
      const rotated = ((code - 48 + rotationFactor) % 10) + 48;
      result += String.fromCharCode(rotated);
    }
    // Non-alphanumeric characters stay the same
    else {
      result += char;
    }
  }

  return result;
}
