"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_of_names_1 = require("../../questions/leet_code/list_of_names");
// test('list_of_names', () => {
//   const word_list = [
//     'cat',
//     'dog',
//     'frank',
//     'catalifornia',
//     'carnival',
//     'catbrastrophe',
//   ];
//
//   const answer = list_of_words(word_list, 'cat');
//   console.log('answer: ', answer);
//
//   for (let i = 0; i < 3; i++) {
//     const word = answer[i];
//
//     if (i === 0) {
//       expect(word).toEqual('cat');
//     }
//
//     if (i === 1) {
//       expect(word).toEqual('catalifornia');
//     }
//
//     if (i === 2) {
//       expect(word).toEqual('catbrastrophe');
//     }
//   }
// });
test('list_of_names_trie', () => {
    const word_list = [
        'cat',
        'dog',
        'frank',
        'catalifornia',
        'catbrastrophe',
        'carnival',
    ];
    const trie = new list_of_names_1.ListOfWords(word_list);
    const answer = trie.get_list_of_words('cat');
    console.log('answer: ', answer);
    for (let i = 0; i < 3; i++) {
        const word = answer[i];
        console.log('what is the word: ', word);
        if (i === 0) {
            expect(word).toEqual('cat');
        }
        if (i === 1) {
            expect(word).toEqual('catalifornia');
        }
        if (i === 2) {
            expect(word).toEqual('catbrastrophe');
        }
    }
});
//# sourceMappingURL=list_of_names.test.js.map