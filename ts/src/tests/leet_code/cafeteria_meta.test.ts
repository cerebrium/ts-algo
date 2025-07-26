import {getMaxAdditionalDinersCount} from '../../questions/leet_code/cafeteria';

test('cafeteria_meta', () => {
  const N = 10;
  const K = 1;
  const M = 2;
  const S = [2, 6];

  const res = getMaxAdditionalDinersCount(N, K, M, S);
  expect(res).toBe(3);
});

test('cafeteria_meta', () => {
  const N = 15;
  const K = 2;
  const M = 3;
  const S = [11, 6, 14];

  const res = getMaxAdditionalDinersCount(N, K, M, S);
  expect(res).toBe(1);
});
