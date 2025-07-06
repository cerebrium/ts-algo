/**
 *
 * @params {string} str -> ssml string
 *
 */
async function parseSSML(str) {
  const domParser = new DOMParser();
  const parsedSSML = domParser.parseFromString(str, 'application/xml');

  const synth = window.speechSynthesis;

  /**
   *
   * @type {HTMLElement[]} topLevelElements
   *
   */
  const parsedNodes = [];
  getParsedSSMLTextAndFunctionality(parsedSSML, parsedNodes);

  console.log('parsedNodes: ', parsedNodes.length);

  for (let i = 0; i < parsedNodes.length; i++) {
    const utterance = parsedNodes[i];
    console.log('utterance: ', utterance);

    if (typeof utterance === 'number') {
      console.log('utterance is num: ', utterance);
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, utterance);
      });
      continue;
    }

    synth.speak(utterance);
  }

  console.log('parsedNodes: ', parsedNodes);
}

/**
 *
 * @param {Document} doc
 * @param {HTMLElement[]} parsedNodes
 *
 */
function getParsedSSMLTextAndFunctionality(doc, parsedNodes) {
  for (const child of doc.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent.trim();
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        parsedNodes.push(utterance);
      }
      continue;
    }

    // const exampleSsml = `
    // <speak>
    //   Hello, welcome to <emphasis level="strong">SSML</emphasis> parsing.
    //   <break time="500ms"/>
    //   Let me <prosody rate="slow" pitch="+2st">slow down</prosody> for a moment.
    //   <break strength="medium"/>
    //   Now back to normal speed.
    //   <p>
    //     This is a new paragraph. <s>This is the first sentence.</s> <s>This is the second sentence.</s>
    //   </p>
    //   <say-as interpret-as="characters">SSML</say-as> is powerful!
    // </speak>
    // `;

    if (child.nodeType === Node.ELEMENT_NODE) {
      switch (child.nodeName.toLowerCase()) {
        case 'break':
          const time = child.getAttribute('time');

          if (!time) {
            break;
          }

          let timeUnits = '';
          for (let i = time.length - 1; i > 0; i--) {
            if (time[i].match(/[a-zA-Z]/)) {
              timeUnits += time[i];
              continue;
            }
            break;
          }

          const timeAmount = time.match(/\d+/);

          console.log('amount: ', timeAmount, '\nunits: ', timeUnits);

          if (timeUnits.split('').reverse().join('') === 'ms') {
            parsedNodes.push(parseInt(timeAmount));
            break;
          }

          parsedNodes.push(parseInt(timeAmount) * 1000);

          break;
        case 'emphasis':
          // Handle Emphasis
          const emText = child.textContent.trim();

          if (!emText) {
            break;
          }

          const emUtterance = new SpeechSynthesisUtterance(emText);
          emUtterance.pitch = 2;

          parsedNodes.push(emUtterance);

          break;
        case 'prosody':
          const text = child.textContent.trim();

          if (!text.length) {
            break;
          }

          const utterance = new SpeechSynthesisUtterance(text);

          for (const att of child.attributes) {
            switch (att.att) {
              case 'rate':
                utterance.rate = parseProsodyRate(att.val);
                break;
              case 'pitch':
                utterance.pitch = parseProsodyPitch(att.val);
            }
          }

          parsedNodes.push(utterance);
          break;
        case 'say-as':
          const sayAsText = child.textContent.trim();

          if (!sayAsText) {
            break;
          }

          const interpreted = child.getAttribute('interpret-as');

          if (interpreted === 'characters') {
            for (let i = 0; i < sayAsText.length; i++) {
              const utterance = new SpeechSynthesisUtterance(sayAsText[i]);
              parsedNodes.push(utterance);
            }
          }

          break;
        default:
          getParsedSSMLTextAndFunctionality(child, parsedNodes);
      }
    }
  }
}

/**
 * Parse SSML prosody rate (e.g., "slow", "fast", "1.2").
 * @param {string} rate
 */
function parseProsodyRate(rate) {
  switch (rate) {
    case 'x-slow':
      return 0.5;
    case 'slow':
      return 0.75;
    case 'medium':
      return 1;
    case 'fast':
      return 1.25;
    case 'x-fast':
      return 1.5;
    default:
      return parseFloat(rate) || 1;
  }
}

/**
 * Parse pitch in SSML format like "+2st" or "high"
 * @param {string} pitch
 */
function parseProsodyPitch(pitch) {
  if (pitch.endsWith('st')) {
    let val = h.match(/\d+/g);
    if (!val.length) {
      return 1;
    }
    val = parseFloat(val[0]);
    return 1 + val * 0.1;
  }
  switch (pitch) {
    case 'x-low':
      return 0.5;
    case 'low':
      return 0.75;
    case 'medium':
      return 1;
    case 'high':
      return 1.25;
    case 'x-high':
      return 1.5;
    default:
      return 1;
  }
}
