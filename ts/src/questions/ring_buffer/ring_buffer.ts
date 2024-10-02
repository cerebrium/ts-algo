/**
 *
 * The initial size must be greater than or equal to 3
 *
 * This is an implementation for an in-memory ring buffer.
 *
 * It should be a class, that takes an initial size. It
 * will have the following methods:
 * 1. shift
 *  a. This removes an element to the front
 * 2. unshift
 *  a. This adds an element to the front
 * 3. push
 *  a. This adds an element to the end
 * 4. pop
 *  a. This removes an element from the end
 * 5. flush
 *  a. This will remove all current elements
 * 6. delete
 *  a. This can be implemented in a variety of
 *  ways. Check the answer for examples.
 *
 *
 * It should maintain a head and tail index into the array.
 * If the array need to be resized, then it will need to
 * copy all relevant entries into a new array of a bigger
 * size.
 *
 */
export class RingBuffer<T> {
  /**
   *
   * This is initialized with a size, meaning that
   * the type is initially undefined, not T. It should
   * not affect the implementation however.
   *
   */
  data: Array<T>;
  tail: number;
  head: number;
  initial_size: number;

  private static _RESIZE_METHODS = {
    ADD: 'add',
    UNSHIFT: 'unshift',
  } as const;

  constructor(initial_size: number = 5) {
    this.data = new Array(initial_size > 3 ? initial_size : 3);
    this.head = 1;
    this.tail = 1;
    this.initial_size = initial_size;
  }

  /**
   *
   * We need to check that the tail is not going to match
   * the head. If it is we need to resize.
   *
   */
  push(input: T): void {
    if (
      this.tail + 1 == this.head ||
      (this.tail == this.data.length - 1 && this.head == 0)
    ) {
      this._resize('ADD');
    }

    if (this.tail + 1 == this.data.length) {
      this.tail = 0;
      this.data[this.tail] = input;
      return;
    }

    if (this.tail == this.head && !this.data[this.head]) {
      this.data[this.tail] = input;
      return;
    }

    ++this.tail;
    this.data[this.tail] = input;
    return;
  }

  /**
   *
   * We need to check that the tail is not going to match
   * the head. If it is we need to resize.
   *
   */
  unshift(input: T): void {
    console.log('what is head: ', this.head);
    if (
      this.head - 1 == this.tail ||
      (this.tail == this.data.length - 1 && this.head == 0)
    ) {
      this._resize('UNSHIFT');
    }

    if (this.head == 0) {
      this.head = this.data.length - 1;
      this.data[this.head] = input;
      return;
    }

    if (this.head == this.tail && !this.data[this.tail]) {
      this.data[this.head] = input;
      return;
    }

    --this.head;
    this.data[this.head] = input;
    return;
  }

  pop(): T | null {
    if (this.tail === this.head) {
      return null;
    }

    if (this.tail == 0) {
      this.tail = this.data.length - 1;
      return this.data[0];
    }

    --this.tail;
    return this.data[this.tail + 1];
  }

  shift(): T | null {
    if (this.head == this.tail) {
      return null;
    }

    if (this.head == this.data.length - 1) {
      this.head = 0;
      return this.data[this.data.length - 1];
    }

    ++this.head;
    return this.data[this.head - 1];
  }

  /**
   *
   * There are several cases that require resizing the
   * ring buffer to a new location:
   *
   * add
   * pop -> not needed, but implemented
   * shift -> not needed, but implemented
   *
   */
  private _resize(option: keyof typeof RingBuffer._RESIZE_METHODS): void {
    // In arrayLists, the standard method is to double
    // the size when needing a resize. That has been
    // maintained here.

    const new_data: Array<T> = new Array(this.data.length * 2);

    // We want the new head and tail to be in the middle of
    // the new array.

    const new_head = Math.floor(new_data.length * 0.25);
    let offset = new_head;
    let currentIdx = this.head;

    do {
      // Go from head to end
      if (currentIdx < this.data.length) {
        new_data[offset] = this.data[currentIdx];
        offset++;
        currentIdx++;
        continue;
      }

      // Go from end to beginning
      if (currentIdx == this.data.length) {
        currentIdx = 0;
        new_data[offset] = this.data[currentIdx];
        offset++;
        currentIdx++;
        continue;
      }

      // Go from beggining to tail
      if (currentIdx < this.tail) {
        new_data[offset] = this.data[currentIdx];
        offset++;
        currentIdx++;
        continue;
      }

      // Fill all slots in new array, including
      // index at this.tail.
    } while (offset - new_head < this.data.length);

    this.head = new_head;
    this.tail = new_head + this.data.length - 1;
    this.data = new_data;
  }

  /**
   *
   * Starts from head, goes to tail, and retrieves all
   * valus that are relavant, returns them.
   *
   * The data is resized, and pointers reset.
   *
   */
  flush(): Array<T> {
    if (this.tail == this.head) {
      return [];
    }

    const rel_data_len: number =
      this.head > this.tail
        ? this.data.length - this.head + this.tail
        : this.tail - this.head;

    const vals_to_return: Array<T> = new Array(rel_data_len);

    let cur_idx = this.head;
    let val_to_return_idx = 0;
    do {
      vals_to_return[val_to_return_idx] = this.data[cur_idx];
      if (cur_idx == this.data.length - 1) {
        cur_idx = 0;
        continue;
      }

      cur_idx++;
    } while (cur_idx !== this.tail);

    this.data = new Array(this.initial_size);
    this.head = 1;
    this.tail = 1;

    return vals_to_return;
  }
}
