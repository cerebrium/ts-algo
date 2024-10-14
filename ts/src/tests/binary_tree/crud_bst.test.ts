import {make_b_tree} from '.';
import {BNode} from '../../questions/binary_tree';
import {add_node, delete_node} from '../../questions/binary_tree/crud_bst';

function in_dfs(node: BNode<number>): Array<number> {
  // Base node is null
  // return
  const path: Array<number> = [];

  iterate(node, path);

  return path;
}

function iterate(node: BNode<number> | undefined, path: Array<number>): void {
  if (!node) {
    return;
  }

  iterate(node.left, path);
  path.push(node.val);
  iterate(node.right, path);
}

test('Add Node', () => {
  const b_tree = make_b_tree();
  add_node(b_tree, 3, b_tree);
  add_node(b_tree, 30, b_tree);
  add_node(b_tree, 9, b_tree);
  add_node(b_tree, 17, b_tree);
  add_node(b_tree, 12, b_tree);
  add_node(b_tree, 23, b_tree);

  const test_pre_dfs = in_dfs(make_b_tree());

  // If this fails, it's the dfs above that is broken
  expect(test_pre_dfs).toEqual([2, 5, 7, 10, 15, 20, 25]);

  // To test this we will do a pre-order depth first search
  // We should find all numbers above within the returned array,
  // and they should be sorted smallest -> greatest.
  const added_nodes_arr = in_dfs(b_tree);
  const expected_ints = [3, 30, 9, 17, 12, 23];

  // All added ints should be present
  for (let i = 0; i < expected_ints.length; i++) {
    expect(added_nodes_arr.includes(expected_ints[i])).toBeTruthy();
  }

  // Check that it is sorted ascending
  let prev_ref = -1;
  for (let i = 0; i < added_nodes_arr.length; i++) {
    expect(added_nodes_arr[i] > prev_ref).toBeTruthy();
    prev_ref = added_nodes_arr[i];
  }
});

test('Delete Node', () => {
  let b_tree = make_b_tree();

  const test_pre_dfs = in_dfs(make_b_tree());

  // If this fails, it's the dfs above that is broken
  expect(test_pre_dfs).toEqual([2, 5, 7, 10, 15, 20, 25]);

  // Delete 2
  delete_node(b_tree, 2, b_tree);

  let nodes_post_deletion = in_dfs(b_tree);

  expect(nodes_post_deletion).toEqual([5, 7, 10, 15, 20, 25]);

  // Check that it is sorted ascending
  let prev_ref = -1;
  for (let i = 0; i < nodes_post_deletion.length; i++) {
    expect(nodes_post_deletion[i] > prev_ref).toBeTruthy();
    prev_ref = nodes_post_deletion[i];
  }

  // check replace operation
  b_tree = make_b_tree();

  delete_node(b_tree, 15, b_tree);

  nodes_post_deletion = in_dfs(b_tree);

  expect(nodes_post_deletion).toEqual([2, 5, 7, 10, 20, 25]);

  // Check that it is sorted ascending
  prev_ref = -1;
  for (let i = 0; i < nodes_post_deletion.length; i++) {
    expect(nodes_post_deletion[i] > prev_ref).toBeTruthy();
    prev_ref = nodes_post_deletion[i];
  }
});
