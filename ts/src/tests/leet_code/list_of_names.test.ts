import {
  ListOfWords,
  list_of_words,
} from '../../questions/leet_code/list_of_names';

test('list_of_names', () => {
  const word_list = [
    'cat',
    'dog',
    'frank',
    'catalifornia',
    'carnival',
    'catbrastrophe',
  ];

  const answer = list_of_words(word_list, 'cat');

  for (let i = 0; i < 3; i++) {
    const word = answer[i];

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

test('list_of_names_trie', () => {
  const word_list = [
    'cat',
    'dog',
    'frank',
    'catbrastrophe', // out of alphabetical order
    'catalifornia', // out of alphabetical order
    'carnival',
  ];
  const trie = new ListOfWords(word_list);

  const answer = trie.get_list_of_words('cat');

  for (let i = 0; i < 3; i++) {
    const word = answer[i];

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
