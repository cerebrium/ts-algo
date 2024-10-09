/*
 *
 *
 * 0 > 1
 *
 * 1 > 2
 * 2 > 3
 * 3 > 4
 * 4 > 5
 * 5 > 0
 *
 */

export const adj_list_circle_demo: Array<[number, number][]> = [
  [[1, 2]],
  [[2, 4]],
  [[3, 8]],
  [[4, 9]],
  [[5, 2]],
  [[0, 4]],
];

export const adj_list_random: Array<[number, number][]> = [
  [[5, 2]],
  [[2, 4]],
  [[3, 8]],
  [[1, 9]],
  [[5, 2]],
  [[3, 4]],
];

// 0 > 5 > 3 > 1 > 2;
