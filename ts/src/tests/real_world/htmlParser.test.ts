import {htmlParse} from '../../questions/real_world/htmlParser';

const exampleSsml = `
<speak>
  Hello, welcome to <emphasis level="strong">SSML</emphasis> parsing.
  <break time="500ms"/>
  Let me <prosody rate="slow" pitch="+2st">slow down</prosody> for a moment.
  <break strength="medium"/>
  Now back to normal speed.
  <p>
    This is a new paragraph. <s>This is the first sentence.</s> <s>This is the second sentence.</s>
  </p>
  <say-as interpret-as="characters">SSML</say-as> is powerful!
</speak>
`;

test('html_parser', () => {
  htmlParse(exampleSsml);
});
