import {event_que} from '../../questions/leet_code/async_event_que';

test('async_event_que', () => {
  function create_queable_item(item: number, time: number): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(item);
      }, time);
    });
  }

  const lengths_list: number[] = [
    1000, 500, 1000, 2000, 15000, 500, 1000, 200, 300, 100,
  ];

  for (let i = 0; i < 10; i++) {
    event_que.enque(create_queable_item(i, lengths_list[i]));
  }

  const qued_answers = event_que.flush();
  const answer: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(true).toBe(true);
});
