"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cycles_1 = require("../../../questions/graph/adjacency_list/cycles");
test('graph_cycles', () => {
    const are_cycles = (0, cycles_1.find_cycles)(test_data_cycle);
    expect(are_cycles).toBeTruthy();
    const arent_cycltes = (0, cycles_1.find_cycles)(test_data_no_cycle);
    expect(arent_cycltes).toBeFalsy();
});
const test_data_cycle = new Map();
test_data_cycle.set('a', ['b']);
test_data_cycle.set('b', ['d', 'e']);
test_data_cycle.set('c', ['a', 'f']);
test_data_cycle.set('d', ['c', 'f']);
test_data_cycle.set('e', []);
test_data_cycle.set('f', []);
const test_data_no_cycle = new Map();
test_data_no_cycle.set('a', ['b']);
test_data_no_cycle.set('b', ['d', 'e']);
test_data_no_cycle.set('c', ['f']);
test_data_no_cycle.set('d', ['c', 'f']);
test_data_no_cycle.set('e', []);
test_data_no_cycle.set('f', []);
//# sourceMappingURL=cycles.test.js.map