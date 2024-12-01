"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRU = void 0;
const doubly_linked_list_1 = require("./doubly_linked_list");
class LRU {
    constructor(first_item, length) {
        if (length < 3) {
            throw new Error('LRU length must be greater than 3');
        }
        this.cache = new doubly_linked_list_1.DoublyLinkedList(length);
        this.cache.unshift_and_create(first_item, first_item.id);
    }
    add_item(item) {
        const cached_item = this.cache.retrieve_node(item.id);
        if (cached_item) {
            this.cache.unshift_and_create(item, item.id);
            return;
        }
        this.cache.unshift_and_create(item, item.id);
    }
    retrieve_item(id) {
        const cached_item = this.cache.retrieve_node(id);
        if (!cached_item)
            return null;
        this.cache.unshift(cached_item);
        return cached_item.value;
    }
}
exports.LRU = LRU;
//# sourceMappingURL=lru.js.map