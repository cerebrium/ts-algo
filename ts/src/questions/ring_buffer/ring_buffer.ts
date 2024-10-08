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
    return;
  }

  /**
   *
   * We need to check that the tail is not going to match
   * the head. If it is we need to resize.
   *
   */
  unshift(input: T): void {
    return;
  }

  pop(): T | null {
    return null;
  }

  shift(): T | null {
    return null;
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
    const vals_to_return: Array<T> = [];
    return vals_to_return;
  }
}
