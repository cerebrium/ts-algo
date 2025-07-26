"use strict";
function createTooMuchRam() {
    const nodes = [];
    for (let i = 0; i < 1000; i++) {
        nodes.push({ name: 'breakTheRam', children: [] });
    }
    for (let i = 0; i < nodes.length; i++) {
        for (let x = 0; x < nodes.length; x++) {
            nodes[i].children.push(nodes[x]);
        }
    }
    return nodes;
}
const tooMuchRam = createTooMuchRam();
//# sourceMappingURL=userSpaceRam.js.map