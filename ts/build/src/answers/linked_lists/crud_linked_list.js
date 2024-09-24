"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class AnswerLinkedNode {
    constructor(val, next = null) {
        this.next = null;
        this.val = val;
        this.next = next;
    }
    swap(target) { }
    delete() { }
    update(new_val) { }
}
class AnswerLinkedList {
    constructor() {
        this.head = null;
    }
    push(val) { }
    unshift() { }
    delete(val) { }
    delete_all(val) { }
}
//# sourceMappingURL=crud_linked_list.js.map