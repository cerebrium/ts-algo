import {Autocomplete} from '../../questions/trie/auto_complete';

test('Autocomplete', () => {
  const autocomplete = new Autocomplete();

  autocomplete.add_word('baac');
  autocomplete.add_word('bbac');
  // autocomplete.add_word('add');
  // autocomplete.add_word('advert');
  // autocomplete.add_word('angie');

  const all_entries = autocomplete.retrieve_words('a');
  // const animal_and_angie = autocomplete.retrieve_words('an');
  // const add_and_advert = autocomplete.retrieve_words('ad');
  // const alphabet = autocomplete.retrieve_words('al');

  console.log('all entries: ', all_entries);

  const all_words = ['alphabet', 'animal', 'add', 'advert', 'angie'];

  for (let i = 0; i < all_words.length; i++) {
    expect(all_entries.includes(all_words[i])).toBeTruthy();
  }
});
