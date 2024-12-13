"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day_seven_part_one = void 0;
function day_seven_part_one(input) {
    const formatted_data = format_data(input);
}
exports.day_seven_part_one = day_seven_part_one;
function format_data(input) {
    const formatted_map = new Map();
    for (let i = 0; i < input.length; i++) {
        const [sum, options] = input[i].split(':');
        formatted_map.set(parseInt(sum), options.split(' ').map(x => parseInt(x)));
    }
    return formatted_map;
}
//# sourceMappingURL=code.js.map