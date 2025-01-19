"use strict";
/*

--- Day 5: Print Queue ---
Satisfied with their search on Ceres, the squadron of scholars suggests subsequently scanning the stationery stacks of
sub-basement 17.

The North Pole printing department is busier than ever this close to Christmas, and while The Historians continue their
search of this historically significant facility, an Elf operating a very familiar printer beckons you over.

The Elf must recognize you, because they waste no time explaining that the new sleigh launch safety manual updates won't
print correctly. Failure to update the safety manuals would be dire indeed, so you offer your services.

Safety protocols clearly indicate that new pages for the safety manuals must be printed in a very specific order. The
notation X|Y means that if both page number X and page number Y are to be produced as part of an update, page number X
must be printed at some point before page number Y.

The Elf has for you both the page ordering rules and the pages to produce in each update (your puzzle input), but can't
figure out whether each update has the pages in the right order.

For example:

47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47

The first section specifies the page ordering rules, one per line. The first rule, 47|53, means that if an update includes
both page number 47 and page number 53, then page number 47 must be printed at some point before page number 53. (47
doesn't necessarily need to be immediately before 53; other pages are allowed to be between them.)

The second section specifies the page numbers of each update. Because most safety manuals are different, the pages needed
in the updates are different too. The first update, 75,47,61,53,29, means that the update consists of page numbers 75, 47, 61, 53, and 29.

To get the printers going as soon as possible, start by identifying which updates are already in the right order.

In the above example, the first update (75,47,61,53,29) is in the right order:

75 is correctly first because there are rules that put each other page after it: 75|47, 75|61, 75|53, and 75|29.
47 is correctly second because 75 must be before it (75|47) and every other page must be after it according to 47|61, 47|53, and 47|29.
61 is correctly in the middle because 75 and 47 are before it (75|61 and 47|61) and 53 and 29 are after it (61|53 and 61|29).
53 is correctly fourth because it is before page number 29 (53|29).
29 is the only page left and so is correctly last.
Because the first update does not include some page numbers, the ordering rules involving those missing page numbers are ignored.

The second and third updates are also in the correct order according to the rules. Like the first update, they also do not
include every page number, and so only some of the ordering rules apply - within each update, the ordering rules that
involve missing page numbers are not used.

The fourth update, 75,97,47,61,53, is not in the correct order: it would print 75 before 97, which violates the rule 97|75.

The fifth update, 61,13,29, is also not in the correct order, since it breaks the rule 29|13.

The last update, 97,13,75,29,47, is not in the correct order due to breaking several rules.

For some reason, the Elves also need to know the middle page number of each update being printed. Because you are currently
only printing the correctly-ordered updates, you will need to find the middle page number of each correctly-ordered update.
In the above example, the correctly-ordered updates are:

75,47,61,53,29
97,61,53,29,13
75,29,13
Theseaoc_day_five_part_one have middle page numbers of 61, 53, and 29 respectively. Adding these page numbers together gives 143.

Of course, you'll need to be careful: the actual list of page ordering rules is bigger and more complicated than the above example.

Determine which updates are already in the correct order. What do you get if you add up the middle page number from those
correctly-ordered updates?
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayFive = void 0;
class DayFive {
    constructor(ordering, updates) {
        const potential_adj_list = this.make_adjacency_list(ordering);
        if (!potential_adj_list) {
            throw new Error('could not make the adjacency list');
        }
        this.ajacency_list = potential_adj_list;
        this.are_cycles = this.detect_cycles();
        // If there are not cycles we will do a top sort and
        // look at the entries that way. If there are cycles
        // we will have to do something else.
        this.handle_day_five = this.are_cycles ? this.non_top_sort : this.top_sort;
        this.updates = updates;
    }
    /*
     *
     * Topologically sort the ajacency_list data, then
     * for each of the updates, run through if they are
     * in order, if they are in order, then we get the
     * middle value and add it so the answer sum and
     * return it.
     *
     */
    top_sort() {
        console.log('INSIDE THE TOP SORT');
        let answer = 0;
        const ordering = [];
        const visited = new Set();
        this.ajacency_list.forEach((_, key) => {
            if (!visited.has(key)) {
                this.top_sort_walk(key, visited, ordering);
            }
        });
        // We are pushing so the ordering is opposite
        ordering.reverse();
        const lookup_for_ordering = new Map();
        for (let i = 0; i < ordering.length; i++) {
            lookup_for_ordering.set(ordering[i], i);
        }
        for (const update of this.updates) {
            const pot_num_to_add = this.walk_orders_top_sort(lookup_for_ordering, update);
            if (pot_num_to_add) {
                answer += pot_num_to_add;
            }
        }
        return answer;
    }
    top_sort_walk(curr_node, visited, ordering) {
        // pre
        visited.add(curr_node);
        const curr_node_children = this.ajacency_list.get(curr_node);
        // recurse
        if (curr_node_children === null || curr_node_children === void 0 ? void 0 : curr_node_children.length) {
            for (const node of curr_node_children) {
                if (visited.has(node)) {
                    continue;
                }
                this.top_sort_walk(node, visited, ordering);
            }
        }
        // post
        ordering.push(curr_node);
    }
    walk_orders_top_sort(ordering, order) {
        const ordered_list = order.map(val => ordering.get(val));
        for (let i = 1; i < ordered_list.length; i++) {
            if (ordered_list[i - 1] > ordered_list[i]) {
                return null;
            }
        }
        return order[Math.floor(order.length / 2)];
    }
    /*
     *
     * Will be implemented later
     *
     */
    non_top_sort() {
        let answer = 0;
        for (const update of this.updates) {
            let is_in_order = true;
            // Walk backwards
            for (let i = update.length - 1; i > -1; i--) {
                const val = update[i];
                const must_be_before = this.ajacency_list.get(val);
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
            if (is_in_order) {
                answer += update[Math.floor(update.length / 2)];
            }
        }
        return answer;
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
    detect_cycles() {
        let are_cycles = false;
        const visited = new Set();
        this.ajacency_list.forEach((_, key) => {
            if (are_cycles) {
                return;
            }
            if (this.walk(key, visited)) {
                are_cycles = true;
            }
        });
        return are_cycles;
    }
    walk(current_node, visited) {
        // pre
        if (visited.has(current_node)) {
            return true;
        }
        visited.add(current_node);
        const children = this.ajacency_list.get(current_node);
        if (children) {
            for (const child of children) {
                if (this.walk(child, visited)) {
                    return true;
                }
            }
        }
        // post
        visited.delete(current_node);
        return false;
    }
}
exports.DayFive = DayFive;
//# sourceMappingURL=code.js.map