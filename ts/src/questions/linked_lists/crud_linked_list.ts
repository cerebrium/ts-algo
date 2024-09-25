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

There should be a Node class, with the following methods:

 1. swap -> will change the references for current target 
 and recieved target
  a. args: taget: Node
 2. delete -> delete current node
  a. args: taget: Node
 3. update: -> alters the value of the input node
  a. args: taget: Node

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

export class LinkedList {
  head: LinkedNode | null = null;

  /**
   *
   * Returns the node pushed
   */
  // @ts-ignore -> remove once implemented
  push(val: number): LinkedNode {}

  /**
   *
   * Returns node unshifted
   *
   */
  // @ts-ignore -> remove once implemented
  unshift(val: number): LinkedNode {}

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
    return null;
  }

  /**
   * This can error if there are no nodes.
   */
  delete_all(val: number): void {}

  /**
   * If there are no nodes found, returns null.
   * Otherwise an array of found nodes.
   *
   * Null check for head is delegated to
   * the find method.
   */
  find_all(val: number): Array<LinkedNode> | null {
    return null;
  }

  /**
   * If there is not one of the values in the LL
   * returns false. If successful, return true.
   */
  swap(val_one: number, val_two: number): boolean {
    return false;
  }
}
