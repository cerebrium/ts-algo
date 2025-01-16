import {day_nine_smaller_test_data} from '../../aoc/questions/day_nine/data';
import {day_nine_part_one} from '../../aoc/questions/day_nine/part_one/code';

test('day_nine', () => {
  const answer = day_nine_part_one(day_nine_smaller_test_data);

  console.log('answer');

  expect(answer).toBe(60);
});
