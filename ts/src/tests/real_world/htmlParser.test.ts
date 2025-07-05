import {htmlParse} from '../../questions/real_world/htmlParser';

const exampleHtml = `<div class="test">
  <p>Hello <b>world</b></p>
</div>`;

test('html_parser', () => {
  htmlParse(exampleHtml);
});
