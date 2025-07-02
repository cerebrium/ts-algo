import {validWordAbbreviation} from '../../questions/leet_code/valid_word_abbreviation';
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
test('valid_word_abbreviation', () => {
  const word = 'internationalization';
  const abbr = 'i12iz4n';
  const res = validWordAbbreviation(word, abbr);
  expect(res).toBeTruthy();
});

// Explanation: The word "apple" cannot be abbreviated as "a2e".
test('valid_word_abbreviation', () => {
  const word = 'apple';
  const abbr = 'a2e';
  const res = validWordAbbreviation(word, abbr);
  expect(res).toBeFalsy();
});

test('valid_word_abbreviation', () => {
  const word = 'abbde';
  const abbr = 'a1b01e';
  const res = validWordAbbreviation(word, abbr);
  expect(res).toBeFalsy();
});

test('valid_word_abbreviation', () => {
  const word = 'hi';
  const abbr = '1';
  const res = validWordAbbreviation(word, abbr);
  expect(res).toBeFalsy();
});
