import {find_cycles} from '../../../questions/graph/adjacency_list/cycles';

test('graph_cycles', () => {
  const are_cycles = find_cycles(test_data_cycle);
  expect(are_cycles).toBeTruthy();

  const arent_cycltes = find_cycles(test_data_no_cycle);
  expect(arent_cycltes).toBeFalsy();
});

const test_data_cycle: Map<string, string[]> = new Map();
test_data_cycle.set('a', ['b']);
test_data_cycle.set('b', ['d', 'e']);
test_data_cycle.set('c', ['a', 'f']);
test_data_cycle.set('d', ['c', 'f']);
test_data_cycle.set('e', []);
test_data_cycle.set('f', []);

const test_data_no_cycle: Map<string, string[]> = new Map();
test_data_no_cycle.set('a', ['b']);
test_data_no_cycle.set('b', ['d', 'e']);
test_data_no_cycle.set('c', ['f']);
test_data_no_cycle.set('d', ['c', 'f']);
test_data_no_cycle.set('e', []);
test_data_no_cycle.set('f', []);
