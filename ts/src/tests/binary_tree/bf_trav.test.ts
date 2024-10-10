import {make_b_tree} from '.';
import {bf_trav} from '../../questions/binary_tree/bf_trav';

test('Breadth First Traversal', () => {
  const b_tree = make_b_tree();
  const bfs_vals = bf_trav(b_tree);
  const bf_answer = [10, 5, 20, 2, 7, 15, 25];

  expect(bfs_vals).toEqual(bf_answer);
});
