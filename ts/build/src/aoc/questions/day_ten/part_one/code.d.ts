export declare class DayTen {
    data: Array<number[]>;
    private visited_terminations;
    private directions;
    private final_sum;
    init(data: Array<number[]>): void;
    find_trailheads(): number;
    private walk;
}
