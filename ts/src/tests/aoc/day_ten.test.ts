import {
  day_ten_data,
  day_ten_test_data,
} from '../../aoc/questions/day_ten/data';
import {DayTen} from '../../aoc/questions/day_ten/part_one/code';
import {DayTenTwo} from '../../aoc/questions/day_ten/part_two/code';

test('day_ten', () => {
  const day_ten = new DayTen();
  day_ten.init(day_ten_data);

  const answer = day_ten.find_trailheads();

  expect(answer).toBe(698);
});

// test('day_ten_part_two', () => {
//   const day_ten = new DayTenTwo();
//   day_ten.init(day_ten_data);
//
//   const answer = day_ten.find_trailheads();
//
//   expect(answer).toBe(1436);
// });
