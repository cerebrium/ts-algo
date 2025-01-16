declare class Event_Que<T> {
    processed_events: number[];
    constructor();
    enque(event: Promise<number>): void;
    flush(): void;
}
declare const event_que: Event_Que<unknown>;
export { event_que };
