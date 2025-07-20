import {
  TreeNode,
  diameterOfBinaryTree,
} from '../../questions/leet_code/diameter_b_tree';

test('diameter', () => {
  const nodeOne = new TreeNode(0);
  const nodeTwo = new TreeNode(1);
  const nodeThree = new TreeNode(2);
  const nodeFour = new TreeNode(3);

  nodeOne.left = nodeTwo;
  nodeOne.right = nodeThree;
  nodeThree.right = nodeFour;
  const res = diameterOfBinaryTree(nodeOne);
  expect(res).toBe(3);
});
