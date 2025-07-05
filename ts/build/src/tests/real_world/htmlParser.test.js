"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlParser_1 = require("../../questions/real_world/htmlParser");
const exampleHtml = `<div class="test">
  <p>Hello <b>world</b></p>
</div>`;
test('html_parser', () => {
    (0, htmlParser_1.htmlParse)(exampleHtml);
});
//# sourceMappingURL=htmlParser.test.js.map