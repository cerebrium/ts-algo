import {adj_list_bfs} from '../../../questions/graph/adjacency_list/breadth_first_search';

test('adj list bfs', () => {
  console.log('is this running');
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
    ],
    [[6, 21]],
    [[7, 6]],
    [[0, 2]],
  ];

  let path = adj_list_bfs(test_data, 4);

  console.log('path to 4: ', path);

  path = adj_list_bfs(test_data, 7);

  console.log('path to 7: ', path);
});
