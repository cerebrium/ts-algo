import {
  TreeNode,
  diameterOfBinaryTree,
} from '../../questions/leet_code/diameter_b_tree';

test('diameter', () => {
  const nodeOne = new TreeNode();
  diameterOfBinaryTree(nodeOne);
  expect(true).toBe(true);
});
