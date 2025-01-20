import {day_one_part_one} from '../../aoc/questions/day_one/part_one/code';
import {
  day_one_part_one_data,
  day_one_sample,
} from '../../aoc/questions/day_one/part_one/data';
import {day_one_part_two} from '../../aoc/questions/day_one/part_two/code';

test('aoc_day_one_part_one', () => {
  const answer = day_one_part_one(day_one_part_one_data);

  expect(answer).toBe(1646452);
});

test('aoc_day_one_part_two', () => {
  const answer = day_one_part_two(day_one_part_one_data);

  expect(answer).toBe(23609874);
});
