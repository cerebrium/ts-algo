import {make_b_tree} from '.';
import {dfs} from '../../questions/binary_tree/dfs';

test('Depth first search', () => {
  const b_tree = make_b_tree();

  console.time('b');
  expect(dfs(b_tree, 7)).toBe(true);
  console.timeEnd('b');

  console.time('b');
  expect(dfs(b_tree, 25)).toBe(true);
  console.timeEnd('b');

  console.time('b');
  expect(dfs(b_tree, 26)).toBe(false);
  console.timeEnd('b');
});
