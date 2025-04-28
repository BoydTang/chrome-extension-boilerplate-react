export function extractAllText(selector) {
  // 使用TreeWalker提取所有文本
  const textArray = [];
  console.log(
    'selector',
    selector,
    document.querySelector(selector || '.Polaris-Frame__Content')
  );
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
