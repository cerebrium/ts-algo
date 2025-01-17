import {adj_list_bfs} from '../../../questions/graph/adjacency_list/breadth_first_search';

test('adj_list_bfs', () => {
  const test_data = [
    [[1, 6]],
    [[2, 3]],
    [[3, 2]],
    [
      [4, 12],
      [5, 7],
    ],
    [
      [1, 9],
      [5, 5],
      [8, 13],
    ],
    [[6, 21]],
    [[7, 6]],
    [[0, 2]],
    [[]],
  ];

  let path = adj_list_bfs(test_data, 4);
  expect(path).toStrictEqual([0, 1, 2, 3, 4]);

  path = adj_list_bfs(test_data, 7);
  expect(path).toStrictEqual([0, 1, 2, 3, 5, 6, 7]);
});
