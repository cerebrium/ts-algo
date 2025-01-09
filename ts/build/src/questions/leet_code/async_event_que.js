"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event_que = void 0;
class Event_Que {
    constructor() {
        // Ring buffer
        this.processed_events = [];
    }
    enque(event) { }
    flush() {
        return;
    }
}
const event_que = new Event_Que();
exports.event_que = event_que;
class RingBuffer {
    constructor() {
        this.data = new Array(5);
        this.current_idx = 0;
        this.end_idx = 0;
    }
    enque(item) {
        if (this.end_idx + 1 === this.current_idx) {
            this.resize();
        }
    }
    resize() { }
}
/*
1. complete the current task
2. complete current and all done tasks in order
3. wait for all tasks in que to finish


*/
//# sourceMappingURL=async_event_que.js.map