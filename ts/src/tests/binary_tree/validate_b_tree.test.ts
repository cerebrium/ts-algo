import {make_b_tree, make_broken_b_tree} from '.';
import {validate_b_tree} from '../../questions/binary_tree/validate_b_tree';

test('Validate B-Tree', () => {
  const bTree = make_b_tree();
  const isValid = validate_b_tree(bTree);
  expect(isValid).toBeTruthy();

  const brokenBTree = make_broken_b_tree();
  const isNotValid = validate_b_tree(brokenBTree);
  expect(isNotValid).toBeFalsy();
});
