const fs = require('fs');
const { allTexts } = require('./allText.js');

function handleText() {
  console.log('allTexts', allTexts?.length);
  const allValues = allTexts.map((item) => item.value);
  const result = [];
  allValues.forEach((item, index) => {
    const isExist = result.some((i) => i.value === item);
    if (isExist) return;
    const ele = allTexts.find((i) => i.value === item);
    if (ele) {
      result.push(ele);
    }
  });
  console.log('result', result?.length);
  fs.writeFileSync('result.json', JSON.stringify(result, null, 2), (err) => {
    if (err) {
      console.error('写入文件失败', err);
    } else {
      console.log('写入文件成功');
    }
  });
}

handleText();
