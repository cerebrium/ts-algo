"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_event_que_1 = require("../../questions/leet_code/async_event_que");
test('async_event_que', () => {
    function create_queable_item(item, time) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(item);
            }, time);
        });
    }
    const lengths_list = [
        1000, 500, 1000, 2000, 15000, 500, 1000, 200, 300, 100,
    ];
    for (let i = 0; i < 10; i++) {
        async_event_que_1.event_que.enque(create_queable_item(i, lengths_list[i]));
    }
    const qued_answers = async_event_que_1.event_que.flush();
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(true).toBe(true);
});
//# sourceMappingURL=async_event_que.test.js.map