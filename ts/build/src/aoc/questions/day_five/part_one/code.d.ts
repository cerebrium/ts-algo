declare class DayFive {
    private formatted_order;
    private input;
    init(ordering: Array<[number, number]>, data: Array<number[]>): void;
    day_five_part_one(): number;
    private _create_top_ordering;
    private _format_odering_data;
    private _is_dag;
    private _has_cycle;
}
declare const day_five_instantiation: DayFive;
export default day_five_instantiation;
