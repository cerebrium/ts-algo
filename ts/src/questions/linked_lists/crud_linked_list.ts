/*
 
 This should create a linked list. It should be a class that 
 has the following methods:

 1. push -> will append to the end of the list
  a. args: val: number
 2. unshift -> will append to the beginning of the list
  a. args: val: number
 3. delete -> will delete the first instance of input
  a. args: val: number
 4. delete_all -> will delete all instances of input
  a. args: val: number
 5. swap -> will change the references for current target 
 and recieved target
  a. args: val_one: number, val_two: number 
 6. find -> Find and return first node if in LL
  a. args: val: number
 7. findAll -> Find and return all nodes if in LL
  a. args: val: number

*/

/*
 
 We do not want these values to be mutable. We 
 only want to be able to change the references
 to them.

 */
export class LinkedNode {
  readonly val: number;
  next: LinkedNode | null = null;

  constructor(val: number, next: LinkedNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/*
 
 For brevity of implementation, tail has been 
 left out. 

 */
export class LinkedList {
  head: LinkedNode | null = null;

  constructor(val: number) {
    this.head = new LinkedNode(val);
  }

  push(val: number): LinkedNode {
    const new_node = new LinkedNode(val);
    if (!this.head) {
      this.head = new_node;
      return this.head;
    }

    let current_node = this.head;
    while (current_node.next) {
      current_node = current_node.next;
    }

    current_node.next = new_node;
    return new_node;
  }
  unshift(val: number): LinkedNode {
    const new_node = new LinkedNode(val);
    if (!this.head) {
      this.head = new_node;
      return this.head;
    }
    new_node.next = this.head;
    this.head = new_node;
    return this.head;
  }
  /**
   *
   * This method can error if there are no nodes.
   * This will return a reference to the instance
   * before the val is found. This is to make the
   * bulk delete work.
   */
  delete(
    val: number,
    target: LinkedNode | null = this.head
  ): LinkedNode | null {
    if (!target) {
      throw new Error('There are no linked nodes');
    }

    let prev_node = target;
    let current_node = target.next;

    // Head is the prev_node at this
    // point.
    if (prev_node.val === val) {
      target = target.next;

      // More nodes possible in the LL
      return target;
    }

    // If current_node.val is the val, then skip
    // if end, and not found, then current_node
    // will be null
    while (current_node && current_node.val !== val) {
      prev_node = current_node;
      current_node = current_node.next;
    }

    if (!current_node) {
      return null;
    }

    if (current_node.next) {
      prev_node.next = current_node.next;

      // More nodes possible in the LL
      return prev_node;
    }

    // This is the last instance of the found val.
    // In this case return null, since no more.
    prev_node.next = null;
    return null;
  }
  /**
   * This can error if there are no nodes.
   */
  delete_all(val: number): void {
    if (!this.head) {
      throw new Error('There are no linked nodes');
    }

    let current_target: LinkedNode | null = this.head;
    while (current_target) {
      // This will throw in the case that there is
      // no head node. Or in the case that we pass
      // in null for the current_target. Either way
      // throwing is what we want. So we won't catch
      // that error.
      current_target = this.delete(val, current_target);
    }
  }
  /**
   * If no node found, returns null. Otherwise the
   * found node.
   */
  find(val: number, target: LinkedNode | null = this.head): LinkedNode | null {
    if (!target) {
      return null;
    }

    let current_node: LinkedNode | null = target;
    while (current_node) {
      if (current_node.val === val) {
        break;
      }
      current_node = current_node.next;
    }
    return current_node;
  }
  /**
   * If there are no nodes found, returns null.
   * Otherwise an array of found nodes.
   *
   * Null check for head is delegated to
   * the find method.
   */
  find_all(val: number): Array<LinkedNode> | null {
    const found_nodes: Array<LinkedNode> = [];
    let current_node = this.head;

    while (current_node) {
      const new_current_node = this.find(val, current_node);
      if (!new_current_node) {
        break;
      }

      found_nodes.push(new_current_node);
      current_node = new_current_node.next;
    }

    return found_nodes.length ? found_nodes : null;
  }
  /**
   * If there is not one of the values in the LL
   * returns false. If successful, return true.
   */
  swap(val_one: number, val_two: number): boolean {
    if (!this.head) {
      return false;
    }
    let prev_one: LinkedNode | null = null;
    let prev_two: LinkedNode | null = null;
    let current: LinkedNode = this.head;

    // We have to check for the first instance of
    // each value.
    while (current.next) {
      if (prev_one && prev_two) {
        break;
      }
      if (current.next.val === val_one && !prev_one) {
        prev_one = current;
      }
      if (current.next.val === val_two && !prev_two) {
        prev_two = current;
      }

      current = current.next;
    }

    // If neither node then not possible. If there
    // is a node and the head isn't the other, also
    // not possible.
    if (
      (!prev_one && !prev_two) ||
      (!prev_one && this.head.val !== val_two) ||
      (!prev_two && this.head.val !== val_one)
    ) {
      return false;
    }

    // No head case to handle
    if (prev_one && prev_two) {
      // These both have to exist, since the loop
      // checked the next value. We know if there
      // is a previous, it's because it is pointing
      // towards the value next.
      const two = prev_two.next as LinkedNode;
      const one = prev_one.next as LinkedNode;

      // swap previous pointers
      prev_two.next = one;
      prev_one.next = two;

      // swap next pointers
      prev_two.next.next = one.next;
      prev_one.next.next = two.next;
      return true;
    }

    // Head case, we know it exists due to lines
    // 25 && 26 up.
    if (prev_two) {
      // val one is in the head
      let one = this.head;
      let two = prev_two.next as LinkedNode;

      // swap previous pointer -> none for head
      prev_two.next = this.head;

      // swap next pointers
      one.next = two.next;
      two.next = one.next;
    } else {
      if (!prev_one) {
        // This should not be possible, error
        // state.
        throw new Error('Swap has a logical flaw');
      }
      // val two is in the head
      let one = prev_one.next as LinkedNode;
      let two = this.head;

      // swap previous pointer -> none for head
      prev_one.next = this.head;

      // swap next pointers
      one.next = two.next;
      two.next = one.next;
    }

    return false;
  }
}
