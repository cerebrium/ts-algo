import {make_b_tree} from '.';
import {bst_search} from '../../questions/binary_tree/bst_search';

test('bst_search', () => {
  const b_tree = make_b_tree();
  const found_target = bst_search(b_tree, 2);

  expect(found_target?.val).toBe(2);

  const not_found_target = bst_search(b_tree, 9);
  expect(not_found_target).toBeFalsy();
});
