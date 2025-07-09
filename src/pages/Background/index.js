console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadCSV') {
    const { url, fileName, saveAs = false } = message;

    // 使用 chrome.downloads API 下载文件
    chrome.downloads.download(
      {
        url: url,
        filename: fileName,
        saveAs: saveAs,
      },
      () => {
        // 下载开始后释放 URL 对象
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
    );

    sendResponse({ success: true });
    return true; // 保持消息通道开放以进行异步响应
  }
});
