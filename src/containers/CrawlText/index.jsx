import React from 'react';
import './CrawlText.css';
import { generateUniqueKey } from './util';

const CrawlText = () => {
  const [fullText, setFullText] = React.useState('');
  const [allText, setAllText] = React.useState([]);
  const [currentPathname, setCurrentPathname] = React.useState('');
  const handleGetAllText = () => {
    // 获取当前活动标签页
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // 向content script发送消息
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          action: 'extractText',
          data: {
            selector: document.getElementById('selector').value ?? '',
          },
        },
        function (response) {
          if (response) {
            // 保存完整文本以便复制或下载
            const currentText = response.data.text;
            const pathname = response.data.pathname;

            setCurrentPathname(pathname);
            setFullText(currentText);

            const resultDiv = document.getElementById('result');
            if (!resultDiv) return;
            // 清空文本框
            resultDiv.value = '';
            // 设置文本框内容
            const text = currentText?.join('\n');
            resultDiv.value = text;
          } else {
            resultDiv.textContent = '无法提取文本，请确保页面已完全加载。';
          }
        }
      );
    });
  };

  const handleCopy = () => {
    if (!fullText) return;
    navigator.clipboard
      .writeText(fullText)
      .then(() => alert('文本已复制到剪贴板!'))
      .catch((err) => console.error('复制失败:', err));
  };

  const handleDownload = () => {
    // 下载
    const pathArr = currentPathname
      ?.replace(/\/reviews/, '')
      ?.split('/')
      ?.filter(Boolean);
    const path = pathArr?.[pathArr?.length - 1] ?? 'home';
    const value = document.getElementById('formatResult').value;
    if (!value || value === 'Something went wrong') {
      alert('请先格式化文本');
      return;
    }
    const blob = new Blob([value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${path}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFormatAndCopy = () => {
    const formatText = document.getElementById('result').value;
    const targetContainer = document.getElementById('formatResult');
    const valueArr = formatText.split('\n');
    if (!valueArr?.length) {
      alert('请先格式化文本');
      return;
    }
    // 去重
    const uniqueValueArr = [...new Set(valueArr)];
    const res = uniqueValueArr
      .map((item) => {
        const key = generateUniqueKey(item, allText);
        if (!key) return;
        const value = item.trim();
        return {
          key,
          value,
        };
      })
      .filter((item) => item);
    setAllText([...allText, ...res]);
    targetContainer.value = JSON.stringify(res, null, 2);
  };

  const handleChange = (e) => {
    console.log('change', e.target.value);
  };
  return (
    <div className="CrawlText">
      <input
        type="text"
        id="selector"
        placeholder="Please enter a valid selector(default: .Polaris-Frame__Content)"
      />
      <div className="actionButton">
        <button onClick={handleGetAllText}>
          Get all text in current pages
        </button>
        <button onClick={handleCopy}>Copy all origin text in the left</button>
        <button onClick={handleFormatAndCopy}>format text for meerkat</button>
        <button onClick={handleDownload}>
          Download format text for meerkat
        </button>
      </div>
      <div className="Container">
        <textarea
          name="result"
          id="result"
          onChange={handleChange}
          placeholder="Origin text"
        ></textarea>
        <textarea
          name="formatResult"
          id="formatResult"
          placeholder="Format text"
        ></textarea>
      </div>
    </div>
  );
};

export { CrawlText };
