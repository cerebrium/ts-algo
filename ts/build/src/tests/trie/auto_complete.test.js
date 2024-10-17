"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auto_complete_1 = require("../../questions/trie/auto_complete");
test('Autocomplete', () => {
    const autocomplete = new auto_complete_1.Autocomplete();
    autocomplete.add_word('alphabet');
    autocomplete.add_word('animal');
    autocomplete.add_word('add');
    autocomplete.add_word('advert');
    autocomplete.add_word('angie');
    const all_entries = autocomplete.retrieve_words('a');
    const animal_and_angie = autocomplete.retrieve_words('an');
    const add_and_advert = autocomplete.retrieve_words('ad');
    const alphabet = autocomplete.retrieve_words('al');
    const all_words = ['alphabet', 'animal', 'add', 'advert', 'angie'];
    for (let i = 0; i < all_words.length; i++) {
        expect(all_entries.includes(all_words[i])).toBeTruthy();
    }
    const animal_and_angie_list = [all_words[1], all_words[4]];
    const add_and_advert_list = [all_words[2], all_words[3]];
    const alphabet_list = [all_words[0]];
    console.log('animal_and_angie: ', animal_and_angie, animal_and_angie_list);
    for (let i = 0; i < animal_and_angie_list.length; i++) {
        expect(animal_and_angie.includes(animal_and_angie_list[i])).toBeTruthy();
    }
    expect(animal_and_angie.length).toBe(2);
    for (let i = 0; i < add_and_advert_list.length; i++) {
        expect(add_and_advert.includes(add_and_advert_list[i])).toBeTruthy();
    }
    expect(add_and_advert.length).toBe(2);
    for (let i = 0; i < alphabet_list.length; i++) {
        expect(alphabet.includes(alphabet_list[i])).toBeTruthy();
    }
    expect(alphabet.length).toBe(1);
});
//# sourceMappingURL=auto_complete.test.js.map