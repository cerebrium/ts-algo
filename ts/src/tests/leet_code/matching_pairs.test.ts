import {matchingPairs} from '../../questions/leet_code/matchingPairs';

test('matching pairs', () => {
  const s = 'abcd';
  const t = 'adcb';
  const output = 4;
  const res = matchingPairs(s, t);
  expect(res).toEqual(output);
});

test('matching pairs', () => {
  const s = 'mno';
  const t = 'mno';
  const output = 1;
  const res = matchingPairs(s, t);
  expect(res).toEqual(output);
});
