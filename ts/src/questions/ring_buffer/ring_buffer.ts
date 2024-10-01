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
class RingBuffer<T> {
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
    POP: 'pop',
    SHIFT: 'shift',
  } as const;

  constructor(initial_size: number) {
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
  add(input: T): void {}

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
