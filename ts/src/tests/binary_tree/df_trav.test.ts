import {make_b_tree} from '.';
import {BfsType, dfs_rec} from '../../questions/binary_tree/df_trav';

test('depth_first_traversal', () => {
  const b_tree = make_b_tree();

  const pre = dfs_rec(b_tree, BfsType.PRE);
  expect(pre).toEqual([10, 5, 2, 7, 20, 15, 25]);

  const in_order = dfs_rec(b_tree, BfsType.IN);
  expect(in_order).toEqual([2, 5, 7, 10, 15, 20, 25]);

  const post = dfs_rec(b_tree, BfsType.POST);
  expect(post).toEqual([25, 15, 20, 7, 2, 5, 10]);
});
