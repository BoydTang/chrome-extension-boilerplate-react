const fs = require('fs');
const { generateCSV } = require('./utils');

const writeCSVToFile = (content) => {
  fs.writeFile('generated_reviews.csv', content, (err) => {
    if (err) {
      console.error('写入 CSV 文件时出错:', err);
    } else {
      console.log('CSV 文件创建成功');
    }
  });
};

// use it in node script
writeCSVToFile(generateCSV());
