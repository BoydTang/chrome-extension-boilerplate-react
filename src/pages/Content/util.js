export function extractAllText(selector) {
  // 使用TreeWalker提取所有文本
  const textArray = [];

  const dom = document.querySelector(selector || '.Polaris-Frame__Content');
  if (!dom) return [];

  const walker = document.createTreeWalker(
    document.querySelector(selector || '.Polaris-Frame__Content'),
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        if (node.textContent.trim() === '') return NodeFilter.FILTER_REJECT;

        // 检查父元素是否可见
        let parent = node.parentElement;
        while (parent) {
          const style = window.getComputedStyle(parent);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
            return NodeFilter.FILTER_REJECT;
          }
          parent = parent.parentElement;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  while (walker.nextNode()) {
    const text = walker.currentNode.textContent.trim();
    if (text) textArray.push(text);
  }

  return textArray;
}

export function extractAllAriaLabel(selector) {
  const ariaLabelArray = [];

  const dom = document.querySelector(selector || '.Polaris-Frame__Content');
  if (!dom) return [];

  try {
    // 使用TreeWalker提取所有文本
    const walker = document.createTreeWalker(
      document.querySelector(selector || '.Polaris-Frame__Content'),
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: function (node) {
          if (
            node.hasAttribute('aria-label') ||
            element.hasAttribute('aria-labelledby')
          ) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        },
      }
    );

    while (walker.nextNode()) {
      const label = getElementAriaLabel(walker.currentNode);
      if (label) ariaLabelArray.push(label.trim());
    }

    return ariaLabelArray;
  } catch (error) {
    console.error('Error extracting aria-label:', error);
    return [];
  }
}

function getElementAriaLabel(element) {
  // 直接检查元素的 aria-label 属性
  if (element.hasAttribute('aria-label')) {
    return element.getAttribute('aria-label');
  }

  // 检查 aria-labelledby 属性，它引用其他元素的 ID
  if (element.hasAttribute('aria-labelledby')) {
    const labelIds = element.getAttribute('aria-labelledby').split(' ');
    return labelIds
      ?.map((id) => {
        const labelElement = document.getElementById(id);
        return labelElement ? labelElement.textContent.trim() : '';
      })
      ?.filter((text) => text)
      ?.join(' ');
  }

  return null;
}
