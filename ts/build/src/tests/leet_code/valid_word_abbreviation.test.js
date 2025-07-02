"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valid_word_abbreviation_1 = require("../../questions/leet_code/valid_word_abbreviation");
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
test('valid_word_abbreviation', () => {
    const word = 'internationalization';
    const abbr = 'i12iz4n';
    const res = (0, valid_word_abbreviation_1.validWordAbbreviation)(word, abbr);
    expect(res).toBeTruthy();
});
// Explanation: The word "apple" cannot be abbreviated as "a2e".
test('valid_word_abbreviation', () => {
    const word = 'apple';
    const abbr = 'a2e';
    const res = (0, valid_word_abbreviation_1.validWordAbbreviation)(word, abbr);
    expect(res).toBeFalsy();
});
test('valid_word_abbreviation', () => {
    const word = 'abbde';
    const abbr = 'a1b01e';
    const res = (0, valid_word_abbreviation_1.validWordAbbreviation)(word, abbr);
    expect(res).toBeFalsy();
});
test('valid_word_abbreviation', () => {
    const word = 'hi';
    const abbr = '1';
    const res = (0, valid_word_abbreviation_1.validWordAbbreviation)(word, abbr);
    expect(res).toBeFalsy();
});
//# sourceMappingURL=valid_word_abbreviation.test.js.map