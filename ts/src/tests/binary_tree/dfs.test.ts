import {make_b_tree} from '.';
import {dfs} from '../../questions/binary_tree/dfs';

test('Depth first search', () => {
  const b_tree = make_b_tree();

  expect(dfs(b_tree, 7)).toBeTruthy();

  expect(dfs(b_tree, 25)).toBeTruthy();

  expect(dfs(b_tree, 26)).toBeFalsy();
});
