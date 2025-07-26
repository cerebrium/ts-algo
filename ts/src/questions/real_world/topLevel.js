function getTopLevelElements() {
  const body = window.document.body;
  const IGNORE_LIST = [
    'A',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'BUTTON',
    'LABEL',
    'SPAN',
    'IMG',
    'PRE',
    'SCRIPT',
  ];

  /**
   * @type {HTMLElement[]} topLevelElements
   */
  const topLevelElements = [];
  getElements(body, topLevelElements, IGNORE_LIST);
  readElements(topLevelElements);
}

/**
 *
 * @param {HTMLElement} el
 * @param {HTMLElement[]} topLevelElements
 * @param {string[]} IGNORE_LIST
 *
 */
function getElements(el, topLevelElements, IGNORE_LIST) {
  if (!el) {
    return null;
  }

  for (const child of el.childNodes) {
    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const topLevelNode = getElements(child, topLevelElements, IGNORE_LIST);
    if (!topLevelNode) {
      continue;
    }

    const alreadyHasChild = topLevelElements.some(val =>
      topLevelNode.contains(val)
    );

    if (alreadyHasChild) {
      continue;
    }

    topLevelElements.push(topLevelNode);
  }

  // Post Base Case
  if (
    !IGNORE_LIST.includes(el.tagName) &&
    el.textContent &&
    el.textContent.trim() &&
    el.parentElement &&
    el.parentElement.childElementCount > 1
  ) {
    return el;
  }
}

/**
 *
 * @param {HTMLElement[]} topLevelElements
 *
 */
function readElements(topLevelElements) {
  const synth = window.speechSynthesis;

  const style = document.createElement('style');
  style.textContent = `
    ::highlight(word-highlight) {
      background-color: yellow;
    }
    
  `;
  document.head.appendChild(style);

  /** @type  {SpeechSynthesisUtterance[]} utterances*/
  const utterances = [];
  getTextElements(topLevelElements, utterances);

  let idx = 0;
  while (idx < utterances.length - 1) {
    synth.speak(utterances[idx]);
    idx++;
  }
}

/**
 *
 * @param {HTMLElement[]} elementList
 * @param {SpeechSynthesisUtterance[]} utterances
 *
 */
function getTextElements(elementList, utterances) {
  for (const el of elementList) {
    if (el.nodeType === Node.TEXT_NODE) {
      const text = el.textContent.trim();

      if (!text) {
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      highlightingNode(utterance, el);
      utterances.push(utterance);
      return;
    }

    if (el.nodeType === Node.ELEMENT_NODE) {
      getTextElements(el.childNodes, utterances);
    }
  }
}

/**
 *
 * @param {SpeechSynthesisUtterance} utterance
 * @param {HTMLElement} _node
 *
 */
function highlightingNode(utterance, _node) {
  utterance.onboundary = e => handleOnBoundaryEvent(e, _node);
  utterance.onend = () => {
    CSS.highlights.clear();
  };
}

/**
 *
 * @param {SpeechSynthesisEvent} e
 * @param {HTMLElement} _node
 *
 */
function handleOnBoundaryEvent(e, _node) {
  if (e.name !== 'word') {
    return;
  }

  const range = createRange(e, _node);
  const highlighter = new Highlight(range);
  CSS.highlights.set('word-highlight', highlighter);
}

/**
 *
 *
 * @param {SpeechSynthesisEvent} e
 * @param {HTMLElement} el
 *
 */
function createRange(e, el) {
  const start = e.charIndex;
  const end = e.charLength + e.charIndex;

  const range = new Range();
  range.setStart(el, start);
  range.setEnd(el, end);
  return range;
}
