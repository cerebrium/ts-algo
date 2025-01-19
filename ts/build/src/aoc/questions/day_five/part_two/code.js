"use strict";
/*
 
--- Part Two ---
While the Elves get to work printing the correctly-ordered updates, you have a little time to fix the rest of them.

For each of the incorrectly-ordered updates, use the page ordering rules to put the page numbers in the right order.
For the above example, here are the three incorrectly-ordered updates and their correct orderings:

75,97,47,61,53 becomes 97,75,47,61,53.
61,13,29 becomes 61,29,13.
97,13,75,29,47 becomes 97,75,47,29,13.
After taking only the incorrectly-ordered updates and ordering them correctly, their middle page numbers are 47, 29,
and 47. Adding these together produces 123.

Find the updates which are not in the correct order. What do you get if you add up the middle page numbers after
correctly ordering just those updates?

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_five_non_graph_part_two = void 0;
class DayFive {
    constructor(ordering, updates) {
        const potential_adj_list = this.make_adjacency_list(ordering);
        if (!potential_adj_list) {
            throw new Error('could not make the adjacency list');
        }
        this.ajacency_list = potential_adj_list;
        this.updates = updates;
        [this.sum_without_non_correct, this.non_correct_ordered] =
            this.non_top_sort();
    }
    make_adjacency_list(ordering) {
        const adjacency_list = new Map();
        for (const unsplit_mapping of ordering) {
            const [x, y] = unsplit_mapping.split('|').map(s => parseInt(s));
            const current_y = adjacency_list.get(x);
            if (!current_y) {
                adjacency_list.set(x, [y]);
                continue;
            }
            adjacency_list.set(x, [...current_y, y]);
        }
        return adjacency_list;
    }
    non_top_sort() {
        let answer = 0;
        let non_correct = [];
        for (const update of this.updates) {
            let is_in_order = true;
            // Walk backwards
            for (let i = update.length - 1; i > -1; i--) {
                if (!is_in_order) {
                    break;
                }
                const val = update[i];
                const must_be_before = this.ajacency_list.get(val);
                if (!must_be_before) {
                    continue;
                }
                // check all values after it
                for (let x = 0; x < i; x++) {
                    if (must_be_before.includes(update[x])) {
                        is_in_order = false;
                        non_correct.push(update);
                        break;
                    }
                }
            }
            if (is_in_order) {
                answer += update[Math.floor(update.length / 2)];
            }
        }
        return [answer, non_correct];
    }
}
function sort_the_update(non_happy_update, adj_list) {
    for (let i = non_happy_update.length - 1; i > -1; i--) {
        const val = non_happy_update[i];
        const must_be_before = adj_list.get(val);
        if (!must_be_before) {
            continue;
        }
        // check values, if found one, swap.
        for (let x = 0; x < i; x++) {
            if (must_be_before.includes(non_happy_update[x])) {
                swap(non_happy_update, x, i);
                // TODO: make an infinite loop
            }
        }
    }
}
function is_happy_update(update, ajacency_list) {
    let is_in_order = true;
    // Walk backwards
    for (let i = update.length - 1; i > -1; i--) {
        if (!is_in_order) {
            break;
        }
        const val = update[i];
        const must_be_before = ajacency_list.get(val);
        if (!must_be_before) {
            continue;
        }
        // check all values after it
        for (let x = 0; x < i; x++) {
            if (must_be_before.includes(update[x])) {
                is_in_order = false;
                break;
            }
        }
    }
    return is_in_order;
}
function day_five_non_graph_part_two(orderings, data) {
    let answer = 0;
    const day_five_part_one = new DayFive(orderings, data);
    const adj_list = day_five_part_one.ajacency_list;
    const updates_to_sort = day_five_part_one.non_correct_ordered;
    // We want to first sort the non-happy ones
    for (const non_happy_update of updates_to_sort) {
        // Walk backwards
        while (!is_happy_update(non_happy_update, adj_list)) {
            sort_the_update(non_happy_update, adj_list);
        }
        answer += non_happy_update[Math.floor(non_happy_update.length / 2)];
    }
    return answer;
}
exports.day_five_non_graph_part_two = day_five_non_graph_part_two;
function swap(data, a, b) {
    [data[a], data[b]] = [data[b], data[a]];
}
//# sourceMappingURL=code.js.map