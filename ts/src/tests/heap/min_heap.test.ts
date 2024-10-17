import {MinHeap} from '../../questions/heap/min_heap';

test('min heap', () => {
  const min_heap = new MinHeap();

  min_heap.add(10);
  min_heap.add(9);
  min_heap.add(8);
  min_heap.add(7);
  min_heap.add(6);
  min_heap.add(5);
  min_heap.add(4);
  min_heap.add(3);
  min_heap.add(2);
  min_heap.add(1);

  expect(min_heap.length).toBe(10);

  const pop_check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < pop_check.length; i++) {
    const first_value = min_heap.pop();
    expect(first_value).toBe(pop_check[i]);
  }
});
