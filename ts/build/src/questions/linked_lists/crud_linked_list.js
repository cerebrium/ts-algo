"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedNode = void 0;
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
class LinkedNode {
    constructor(val, next = null) {
        this.next = null;
        this.val = val;
        this.next = next;
    }
}
exports.LinkedNode = LinkedNode;
class LinkedList {
    constructor(val) {
        this.head = null;
        this.head = new LinkedNode(val);
    }
    /**
     *
     * Returns the node pushed
     */
    // @ts-ignore -> remove once implemented
    push(val) { }
    /**
     *
     * Returns node unshifted
     *
     */
    // @ts-ignore -> remove once implemented
    unshift(val) { }
    /**
     *
     * This method can error if there are no nodes.
     * This will return a reference to the instance
     * before the val is found. This is to make the
     * bulk delete work.
     */
    delete(val, target = this.head) {
        return null;
    }
    /**
     * This can error if there are no nodes.
     */
    delete_all(val) { }
    /**
     * If no node found, returns null. Otherwise the
     * found node.
     */
    find(val, target = this.head) {
        return null;
    }
    /**
     * If there are no nodes found, returns null.
     * Otherwise an array of found nodes.
     *
     * Null check for head is delegated to
     * the find method.
     */
    find_all(val) {
        return null;
    }
    /**
     * If there is not one of the values in the LL
     * returns false. If successful, return true.
     */
    swap(val_one, val_two) {
        return false;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=crud_linked_list.js.map