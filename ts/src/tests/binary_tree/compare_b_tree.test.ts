import {make_b_tree, make_broken_b_tree} from '.';
import {b_tree_compare} from '../../questions/binary_tree/compare_b_tree';

test('compare two b trees', () => {
  const b_one = make_b_tree();
  const b_two = make_b_tree();
  let is_equal = b_tree_compare(b_one, b_two);
  expect(is_equal).toBeTruthy();

  const b_three = make_broken_b_tree();
  is_equal = b_tree_compare(b_one, b_three);
  expect(is_equal).toBeFalsy();
});
