const exampleSsml = `
<speak>
  Hello, welcome to <emphasis level="strong">SSML</emphasis> parsing.
  <break time="500ms"/>
  Let me <prosody rate="slow" pitch="+2st">slow down<s>inside the slow down</s></prosody> for a moment.
  <break strength="medium"/>
  Now back to normal speed.
  <p>
    This is a new paragraph. <s>This is the first sentence.</s> <s>This is the second sentence.</s>
  </p>
  <say-as interpret-as="characters">SSML</say-as> is powerful!
</speak>
`;

/**
 *
 * @param {string} str -> the ssml text
 *
 */
async function ssmlParser(str) {
  const domParser = new DOMParser();
  const doc = domParser.parseFromString(str, 'application/xml');

  const synth = window.speechSynthesis;
  const parsedElements = [];
  getParsedElements(doc, parsedElements);

  let currIdx = 0;
  while (currIdx < parsedElements.length - 1) {
    if (typeof parsedElements[currIdx] === 'number') {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res({waited: true});
        }, parsedElements[currIdx]);
      });

      currIdx++;
      continue;
    }

    synth.speak(parsedElements[currIdx]);
    currIdx++;
  }
}

/**
 *
 * @param {Document} doc
 *
 */
function getParsedElements(doc, parsedElements) {
  for (const child of doc.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = getTextFromNode(child);

      if (!text) {
        continue;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      parsedElements.push(utterance);
      continue;
    }

    if (child.nodeType === Node.ELEMENT_NODE) {
      switch (child.nodeName) {
        case 'break':
          const att = child.getAttribute('time');
          const strength = child.getAttribute('strength');

          if (!att && !strength) {
            console.log('child: ', child);
            throw new Error('break element no time attribute or strength');
          }

          if (att) {
            const duration = att.match(/\d+/);

            if (!duration.length) {
              throw new Error('break element duration has no digits');
            }

            if (att.match('ms').length) {
              parsedElements.push(parseInt(duration[0]));
              continue;
            }

            parsedElements.push(parseInt(duration[0] * 1000));
            continue;
          }

          switch (strength) {
            case 'medium':
              parsedElements.push(500);
              continue;
          }

        case 'emphasis':
          const level = child.getAttribute('level');
          if (!level) {
            throw new Error('emphasis no level attribute');
          }

          const emText = getTextFromNode(child);
          if (!emText) {
            continue;
          }

          const emUtterance = emphasize(level, emText);
          parsedElements.push(emUtterance);
          break;
        case 'prosody':
          const proText = getTextFromNode(child);

          if (!proText) {
            throw new Error('no text in the prosody');
          }

          const rate = child.getAttribute('rate');
          const pitch = child.getAttribute('pitch');

          const proUtterance = handleProsody(rate, pitch, proText);
          parsedElements.push(proUtterance);

          break;
        case 'say-as':
          const sayAsText = getTextFromNode(child);

          if (!sayAsText) {
            continue;
          }
          const interpreted = child.getAttribute('interpret-as');

          if (interpreted === 'characters') {
            for (let i = 0; i < sayAsText.length; i++) {
              const sayUtterance = new SpeechSynthesisUtterance(
                sayAsText.charAt(i)
              );

              parsedElements.push(sayUtterance);
            }
          }

        default:
          getParsedElements(child, parsedElements);
      }
    }
  }
}

/**
 *
 * @param {'strong' | 'weak' | 'normal'} level
 * @param {string} text
 *
 * @returns {SpeechSynthesisUtterance}
 */
function emphasize(level, text) {
  const utterance = new SpeechSynthesisUtterance(text);
  switch (level) {
    case 'strong':
      utterance.pitch = 1.5;
      utterance.volume = 1.5;
      return utterance;
    default:
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      return utterance;
  }
}

/**
 *
 * @param {string | undefined} rate
 * @param {string | undefined} pitch
 * @param {string} text
 *
 * @returns {SpeechSynthesisUtterance}
 */
function handleProsody(rate, pitch, text) {
  const utterance = new SpeechSynthesisUtterance(text);
  // Let me <prosody rate="slow" pitch="+2st">slow down</prosody> for a moment.
  switch (rate) {
    case 'slow':
      utterance.rate = 0.1;
      break;
    case 'medium':
      utterance.rate = 1.0;
      break;
    case 'fast':
      utterance.rate = 1.5;
      break;
  }

  const isIncrease = !!(pitch.charAt(0) === '+');
  const pitchModulationAmount = pitch.match(/\d+/);

  if (!pitchModulationAmount.length) {
    throw new Error('no pitchModulationAmount');
  }

  if (isIncrease) {
    const modAmount = parseInt(pitchModulationAmount[0]);

    if (typeof modAmount !== 'number') {
      throw new Error('modAmount could not be converted to number');
    }

    utterance.pitch = 1 + Math.log(modAmount);
    return utterance;
  }
  const modAmount = parseInt(pitchModulationAmount[0]);

  if (typeof modAmount !== 'number') {
    throw new Error('modAmount could not be converted to number');
  }

  utterance.pitch = 1 - Math.log(modAmount);
  return utterance;
}

/**
 *
 * @param {HTMLElement} _node
 *
 */
function getTextFromNode(_node) {
  const text = _node.textContent.trim();

  if (!text.length) {
    return null;
  }

  return text;
}
