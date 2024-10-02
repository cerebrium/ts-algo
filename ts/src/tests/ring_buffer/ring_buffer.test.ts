import {RingBuffer} from '../../questions/ring_buffer/ring_buffer';

test('Ring Buffer pop', () => {
  // Default size is 5
  const ringBuffer = new RingBuffer();
  ringBuffer.push(1);
  ringBuffer.push(2);
  ringBuffer.push(3);
  ringBuffer.push(4);
  ringBuffer.push(5);

  expect(ringBuffer.data[ringBuffer.head]).toBe(1);
  expect(ringBuffer.data[ringBuffer.head + 1]).toBe(2);
  expect(ringBuffer.data[ringBuffer.head + 2]).toBe(3);
  expect(ringBuffer.data[ringBuffer.head + 3]).toBe(4);
  expect(ringBuffer.data[ringBuffer.tail]).toBe(5);
});

test('Ring Buffer unshift', () => {
  // Default size is 5
  const ringBuffer = new RingBuffer();
  ringBuffer.unshift(1);
  ringBuffer.unshift(2);
  ringBuffer.unshift(3);
  ringBuffer.unshift(4);
  ringBuffer.unshift(5);

  expect(ringBuffer.data[ringBuffer.head]).toBe(5);
  expect(ringBuffer.data[ringBuffer.tail]).toBe(1);
});
