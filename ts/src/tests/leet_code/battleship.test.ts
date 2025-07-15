import {countBattleships} from '../../questions/leet_code/battleship';

test('battleship', () => {
  const board = [
    ['X', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
  ];
  const res = countBattleships(board);
  const output = 2;
  expect(res).toEqual(2);
});

test('battleship', () => {
  const board = [['.']];
  const res = countBattleships(board);
  const output = 0;
  expect(res).toEqual(0);
});
