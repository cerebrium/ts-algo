"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
class DoublyLinkedList {
    constructor(max_length) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.id_map = new WeakMap();
        this.max_length = max_length;
    }
    push(value, id) {
        this.length++;
        if (this.tail) {
            this.tail.next = { value, prev: this.tail, next: null, id };
            this.tail = this.tail.next;
            // This will just delete the node if it's oversized. Not a
            // needed method for this paticular implementation
            this.handle_new_value_map(id, this.tail);
            return;
        }
        // If no tail, no head either
        this.head = this.tail = {
            value,
            prev: this.tail,
            next: null,
            id,
        };
        this.handle_new_value_map(id, this.tail);
    }
    unshift_and_create(value, id) {
        this.length++;
        if (this.head) {
            this.head.prev = { value, prev: this.tail, next: null, id };
            this.head = this.head.prev;
            this.handle_new_value_map(id, this.head);
            return;
        }
        this.head = this.tail = {
            value,
            prev: this.tail,
            next: null,
            id,
        };
        this.handle_new_value_map(id, this.head);
    }
    unshift(node) {
        if (this.head) {
            node.next = this.head;
            this.head = node;
            this.handle_new_value_map(node.id, node);
            return;
        }
        this.head = this.tail = node;
        this.handle_new_value_map(node.id, node);
    }
    pop() {
        var _a;
        if (!this.length)
            return null;
        this.length--;
        if (this.tail && this.tail.prev) {
            const node_value = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return node_value;
        }
        // If there was not tail, length check would fail
        // there is no prev, which means tail = head
        let node_value = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.value;
        this.tail = null;
        this.head = null;
        // This just makes ts happy
        return node_value ? node_value : null;
    }
    shift() {
        var _a;
        if (!this.length)
            return null;
        this.length--;
        if (this.head && this.head.next) {
            const current_node = this.head.value;
            // gc will collect since previous head node has no pointers
            // to it.
            this.head = this.head.next;
            return current_node;
        }
        // If there was not tail, length check would fail
        // there is no prev, which means tail = head
        const node_value = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        this.tail = null;
        this.head = null;
        // This just makes ts happy
        return node_value ? node_value : null;
    }
    handle_new_value_map(id, new_node) {
        var _a, _b;
        this.id_map.set(id, new_node);
        if (this.length > this.max_length) {
            // Need to remove the item from map
            // We know tail exists if the length is
            // greater than max lenght
            this.id_map.delete((_a = this.tail) === null || _a === void 0 ? void 0 : _a.id);
            // Can null coerce due to above check.
            this.tail = (_b = this.tail) === null || _b === void 0 ? void 0 : _b.prev;
            this.tail.next = null;
        }
    }
    retrieve_node(id) {
        var _a, _b, _c, _d;
        const node = this.id_map.get(id);
        if (!node)
            return null;
        // Remove from the weak map
        this.id_map.delete(id);
        // Need do detach the node
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.id) !== node.id && ((_b = this.tail) === null || _b === void 0 ? void 0 : _b.id) !== node.id) {
            node.prev = node.next;
            this.length--;
            return node;
        }
        if (((_c = this.head) === null || _c === void 0 ? void 0 : _c.id) === node.id) {
            if (this.length > 1) {
                this.head = this.head.next;
                this.length--;
                return node;
            }
            this.head = this.tail = null;
            this.length--;
            return node;
        }
        if (this.length > 1) {
            this.tail = (_d = this.tail) === null || _d === void 0 ? void 0 : _d.prev;
            this.length--;
            return node;
        }
        this.head = this.tail = null;
        this.length--;
        return node;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=doubly_linked_list.js.map