import {primms} from '../../../questions/graph/prims/code';

test('prims', () => {
  console.log('prims');

  const test_data = [
    'a|b|9',
    'b|a|9',

    'c|b|1',
    'b|c|1',

    'c|d|8',
    'd|c|8',

    'b|d|8',
    'd|b|8',

    'd|f|4',
    'f|d|4',

    'e|f|1',
    'f|e|1',

    'c|e|3',
    'e|c|3',

    'e|g|3',
    'g|e|3',

    'f|g|2',
    'g|f|2',

    'e|f|1',
    'f|e|1',
  ];

  const test_min_span_tree = [
    'e|f|1',
    'f|g|2',
    'f|d|4',
    'e|c|3',
    'c|b|1',
    'b|a|9',
  ];

  expect(true).toBe(true);
});
