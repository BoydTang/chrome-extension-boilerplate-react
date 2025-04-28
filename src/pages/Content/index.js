import { printLine } from './modules/print';
import { extractAllText } from './util';

console.log('Content script works!');
printLine("Using the 'printLine' function from the Print Module");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('收到来自 popup 的消息:', request);

  if (request.action === 'extractText') {
    const selector = request.data.selector;
    const text = extractAllText(selector);

    // 发送响应
    sendResponse({
      data: {
        text,
        pathname: window.location.pathname,
      },
    });
  }

  // 注意：必须返回 true 以保持消息通道开放，支持异步响应
  return true;
});
