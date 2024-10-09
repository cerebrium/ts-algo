import {make_b_tree} from '.';
import {BfsType, bfs_rec} from '../../questions/binary_tree/bfs';

test('Breadth first search', () => {
  const b_tree = make_b_tree();

  const pre = bfs_rec(b_tree, BfsType.PRE);
  expect(pre).toEqual([10, 5, 2, 7, 20, 15, 25]);

  const in_order = bfs_rec(b_tree, BfsType.IN);
  expect(in_order).toEqual([2, 5, 7, 10, 15, 20, 25]);

  const post = bfs_rec(b_tree, BfsType.POST);
  expect(post).toEqual([25, 15, 20, 7, 2, 5, 10]);
});
