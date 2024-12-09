"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DayFive {
    // Comes in as tuples, but the adjacency data can be empty children
    init(ordering, data) {
        this._format_odering_data(ordering);
        if (!this.formatted_order) {
            throw new Error('Issue with formatting order');
        }
        if (!this._is_dag()) {
            throw new Error('this graph is cyclic, cannot topological sort');
        }
        this.input = data;
    }
    day_five_part_one() {
        if (!this.input || !this.formatted_order) {
            throw new Error('No input');
        }
        const is_success = new Array(this.input.length).fill(false);
        // we need to walk through the dfs given a target node and see if all
        // children are in topological order
        for (let i = 0; i < this.input.length; i++) {
            const current_update = this.input[i];
            let is_local_success = true;
            for (let x = 1; x < current_update.length; x++) {
                const top_order = [];
                const visited = [];
                this._create_top_ordering(current_update[x - 1], top_order, visited);
                const top_order_formatted = top_order.reverse();
                // TODO: sort out comparisons
                if (!top_order_formatted.includes(current_update[x])) {
                    is_local_success = false;
                    break;
                }
            }
            if (is_local_success) {
                is_success[i] = true;
            }
        }
        let sum = 0;
        for (let i = 0; i < is_success.length; i++) {
            if (is_success[i]) {
                const mid = Math.floor(this.input[i].length / 2);
                sum += this.input[i][mid];
            }
        }
        return sum;
    }
    _create_top_ordering(target, top_order, visited) {
        var _a;
        if (!((_a = this.formatted_order) === null || _a === void 0 ? void 0 : _a.has(target))) {
            throw new Error('node not in map');
        }
        visited.push(target);
        const children = this.formatted_order.get(target);
        // If terminal, push
        if (!children.length) {
            top_order.push(target);
        }
        for (let i = 0; i < children.length; i++) {
            if (visited.includes(children[i])) {
                continue;
            }
            // Recurse
            this._create_top_ordering(children[i], top_order, visited);
        }
        if (!top_order.includes(target)) {
            // Push after recursion -> post-order
            top_order.push(target);
        }
    }
    _format_odering_data(orderings) {
        this.formatted_order = new Map();
        for (let i = 0; i < orderings.length; i++) {
            if (this.formatted_order.has(orderings[i][0])) {
                const new_arr = this.formatted_order.get(orderings[i][0]);
                new_arr.push(orderings[i][1]);
                if (!this.formatted_order.has(orderings[i][1])) {
                    this.formatted_order.set(orderings[i][1], []);
                }
                this.formatted_order.set(orderings[i][0], new_arr);
                continue;
            }
            this.formatted_order.set(orderings[i][0], [orderings[i][1]]);
            if (!this.formatted_order.has(orderings[i][1])) {
                this.formatted_order.set(orderings[i][1], []);
            }
        }
    }
    /*
     *
     * The algorithm is to traverse in a depth first way
     * looking at every node in the graph. If the dfs finds
     * a node that was already visited then we have a cycle.
     *
     * Perform this search on every node in the graph. If
     * a node has been visited, then we can not traverse
     * it again.
     *
     */
    _is_dag() {
        if (!this.formatted_order) {
            throw new Error('the graph has not been created');
        }
        const visited = new Set();
        const rec_stack = new Set();
        for (let node of this.formatted_order.keys()) {
            if (this._has_cycle(node, visited, rec_stack)) {
                return false;
            }
        }
        return true;
    }
    _has_cycle(node, visited, rec_stack) {
        // base cases
        if (rec_stack.has(node)) {
            return true;
        }
        if (visited.has(node)) {
            return false;
        }
        // Pre-order
        visited.add(node);
        rec_stack.add(node);
        const children = this.formatted_order.get(node);
        // Recurse
        for (let i = 0; i < children.length; i++) {
            const has_cycle = this._has_cycle(children[i], visited, rec_stack);
            if (has_cycle) {
                return true;
            }
        }
        // post-order
        rec_stack.delete(node);
        return false;
    }
}
const day_five_instantiation = new DayFive();
exports.default = day_five_instantiation;
//# sourceMappingURL=code.js.map