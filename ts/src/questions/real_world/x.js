function getTopLevelElement() {
  const body = document.body;

  const topLevelElements = [];
  getElements(body, topLevelElements);

  console.log('Top level elements: ', topLevelElements);
}

/**
 *
 * @param {HTMLElement} el
 * @param {HTMLElement[]} topLevelEls
 */
function getElements(el, topLevelEls) {
  const ignores = [
    'H1',
    'H2',
    'H3',
    'H4',
    'SCRIPT',
    'META',
    'IMG',
    'PRE',
    'BUTTON',
    'SPAN',
  ];
  if (!el) {
    return null;
  }

  for (const child of el.childNodes) {
    if (
      child.nodeType !== Node.ELEMENT_NODE ||
      ignores.includes(child.tagName)
    ) {
      continue;
    }

    const foundEl = getElements(child, topLevelEls);
    if (!foundEl) {
      continue;
    }

    const includedAlready = topLevelEls.some(v => foundEl.contains(v));
    if (includedAlready) {
      continue;
    }

    topLevelEls.push(foundEl);
  }

  // Base Case post order
  if (
    !ignores.includes(el.tagName) &&
    el.parentElement &&
    el.parentElement.childElementCount > 1 &&
    el.textContent.trim()
  ) {
    return el;
  }
}
