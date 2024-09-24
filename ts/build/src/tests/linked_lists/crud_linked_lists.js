"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_linked_list_1 = require("../../questions/linked_lists/crud_linked_list");
// export class LinkedList {
//   head: LinkedNode | null = null;
//
//   constructor(val: number) {
//     this.head = new LinkedNode(val);
//   }
//
//   push(val: number) {}
//   unshift() {}
//   delete(val: number) {}
//   delete_all(val: number) {}
//   find()
//   find_all()
//   swap
// }
test('LinkedList push', () => {
    var _a, _b;
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    expect((_b = (_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.val).toEqual(1);
});
test('LinkedList unshift', () => {
    var _a;
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.unshift(1);
    expect((_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.val).toEqual(1);
});
test('LinkedList delete', () => {
    var _a;
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(2);
    linkedList.delete(2);
    // Something very odd has happened if this is
    // hit.
    if (!linkedList.head) {
        throw new Error('Linked list does not have an accesible head.');
    }
    // We need to check that only the first
    // instance of the val is deleted.
    const two_prev = (_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.next;
    expect(typeof two_prev).toBe(typeof crud_linked_list_1.LinkedNode);
    expect(typeof two_prev.next).toBe(typeof crud_linked_list_1.LinkedNode);
    if (two_prev && two_prev.next) {
        expect(two_prev.next.val).toEqual(3);
    }
    let current_node = linkedList.head;
    while (current_node.next) {
        current_node = current_node.next;
    }
    expect(current_node.val).toEqual(2);
});
test('LinkedList delete_all', () => {
    var _a;
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(2);
    linkedList.delete_all(2);
    // Something very odd has happened if this is
    // hit.
    if (!linkedList.head) {
        throw new Error('Linked list does not have an accesible head.');
    }
    // We need to check that only the first
    // instance of the val is deleted.
    const two_prev = (_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.next;
    expect(typeof two_prev).toBe(typeof crud_linked_list_1.LinkedNode);
    expect(typeof two_prev.next).toBe(typeof crud_linked_list_1.LinkedNode);
    if (two_prev && two_prev.next) {
        expect(two_prev.next.val).toEqual(3);
    }
    let current_node = linkedList.head;
    while (current_node.next) {
        current_node = current_node.next;
    }
    expect(current_node.val).toEqual(3);
});
test('LinkedList find', () => {
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    const found_node = linkedList.find(1);
    expect(found_node).toBeTruthy();
    expect(found_node.val).toEqual(1);
});
test('LinkedList find_all', () => {
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    linkedList.push(1);
    linkedList.push(1);
    const found_nodes = linkedList.find_all(1);
    expect(found_nodes).toBeTruthy();
    expect(found_nodes.length).toEqual(3);
});
test('LinkedList swap', () => {
    var _a, _b;
    const linkedList = new crud_linked_list_1.LinkedList(0);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);
    linkedList.push(8);
    linkedList.swap(3, 5);
    const prev_3 = (_b = (_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.next;
    expect(prev_3).toBeTruthy();
    const expected_5 = prev_3.next;
    expect(expected_5).toBeTruthy();
    expect(expected_5.val).toEqual(5);
});
//# sourceMappingURL=crud_linked_lists.js.map