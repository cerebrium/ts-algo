"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ring_buffer_1 = require("../../questions/ring_buffer/ring_buffer");
test('Ring Buffer push', () => {
    // Default size is 5
    const ringBuffer = new ring_buffer_1.RingBuffer();
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
    const ringBuffer = new ring_buffer_1.RingBuffer();
    ringBuffer.unshift(1);
    ringBuffer.unshift(2);
    ringBuffer.unshift(3);
    ringBuffer.unshift(4);
    ringBuffer.unshift(5);
    expect(ringBuffer.data[ringBuffer.head]).toBe(5);
    expect(ringBuffer.data[ringBuffer.tail]).toBe(1);
});
test('Ring Buffer pop', () => {
    // Relies on push
    const ringBuffer = new ring_buffer_1.RingBuffer();
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
    // Above is copied from test 1
    const firstOutput = ringBuffer.pop();
    expect(firstOutput).toBe(5);
    const secondOutput = ringBuffer.pop();
    expect(secondOutput).toBe(4);
    const thirdOutput = ringBuffer.pop();
    expect(thirdOutput).toBe(3);
    ringBuffer.push(10);
    const fourthOutput = ringBuffer.pop();
    expect(fourthOutput).toBe(10);
});
test('Ring Buffer shift', () => {
    // Relies on unshift
    const ringBuffer = new ring_buffer_1.RingBuffer();
    ringBuffer.unshift(1);
    ringBuffer.unshift(2);
    ringBuffer.unshift(3);
    ringBuffer.unshift(4);
    ringBuffer.unshift(5);
    expect(ringBuffer.data[ringBuffer.head]).toBe(5);
    expect(ringBuffer.data[ringBuffer.tail]).toBe(1);
    // Above is copied from test 1
    const firstOutput = ringBuffer.shift();
    expect(firstOutput).toBe(5);
    const secondOutput = ringBuffer.shift();
    expect(secondOutput).toBe(4);
    const thirdOutput = ringBuffer.shift();
    expect(thirdOutput).toBe(3);
    ringBuffer.unshift(10);
    const fourthOutput = ringBuffer.shift();
    expect(fourthOutput).toBe(10);
});
test('flush', () => {
    // Relies on push
    const ringBuffer = new ring_buffer_1.RingBuffer();
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
    const currentData = ringBuffer.flush();
    expect(currentData).toEqual([1, 2, 3, 4, 5]);
    const pushed = ringBuffer.pop();
    expect(pushed).toEqual(null);
});
test('resize', () => {
    // Relies on push
    const ringBuffer = new ring_buffer_1.RingBuffer();
    ringBuffer.push(1);
    ringBuffer.push(2);
    ringBuffer.push(3);
    ringBuffer.push(4);
    ringBuffer.push(5);
    ringBuffer.push(6);
    ringBuffer.push(7);
    ringBuffer.push(8);
    ringBuffer.push(9);
    ringBuffer.push(10);
    ringBuffer.push(11);
    ringBuffer.push(12);
    ringBuffer.push(13);
    expect(ringBuffer.data[ringBuffer.head]).toBe(1);
    expect(ringBuffer.data[ringBuffer.head + 1]).toBe(2);
    expect(ringBuffer.data[ringBuffer.head + 2]).toBe(3);
    expect(ringBuffer.data[ringBuffer.head + 3]).toBe(4);
    const flushedResizedData = ringBuffer.flush();
    expect(flushedResizedData).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ]);
});
//# sourceMappingURL=ring_buffer.test.js.map