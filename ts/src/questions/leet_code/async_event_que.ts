class Event_Que<T> {
  // Ring buffer
  processed_events: number[] = [];
  constructor() {}
  enque(event: Promise<number>) {}
  flush() {
    return;
  }
}

const event_que = new Event_Que();

class RingBuffer<T> {
  data: Array<Promise<T> | null> = new Array(5);

  current_idx: number = 0;
  end_idx: number = 0;

  constructor() {}

  enque(item: Promise<number>) {
    if (this.end_idx + 1 === this.current_idx) {
      this.resize();
    }
  }

  resize() {}
}

export {event_que};

/*
1. complete the current task
2. complete current and all done tasks in order
3. wait for all tasks in que to finish


*/
