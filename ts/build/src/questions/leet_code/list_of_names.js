"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list_of_words = void 0;
function list_of_words(input, prefix) {
    const final_array = [];
    input.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith(prefix)) {
            final_array.push(input[i]);
        }
    }
    return final_array;
}
exports.list_of_words = list_of_words;
//# sourceMappingURL=list_of_names.js.map