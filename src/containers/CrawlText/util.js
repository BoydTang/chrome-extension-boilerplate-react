function createKey(text) {
  // 根据输入的文本返回一个唯一的键，结构是 {key: 'text', value: 'text'}
  // key 的规则是取字母加 uuid 的前6位做哈希值，中间用下划线拼接
  // 例如：hello 变成 hello_123456，hello world 变成 hel_wo_123456，he wor a 变成 he_wor_123456, a ha a 变成 a_ha_a_123456, a haw a 变成 a_haw_123456
  // 这里的 uuid 是一个随机生成的字符串，可以使用 crypto 库来生成
  // 例如：crypto.randomUUID().slice(0, 6)
  const uuid = crypto.randomUUID().slice(0, 6);
  // 如果 text 为数字
  if (!isNaN(text)) return '';
  let textStr = formatKeyPrefixText(text)
    .trim()
    .replaceAll(' ', '_')
    .slice(0, 6);
  if (!textStr) return '';
  // 如果是 _，结尾，则去掉最后一个 _
  if (textStr.endsWith('_')) {
    textStr = textStr.slice(0, -1);
  }
  const key = textStr + '_' + uuid;
  return key.toUpperCase();
}

function checkKeyExist(key, allTextArr) {
  // 检查 key 是否存在于 allText 中
  return allTextArr.some((item) => item.key === key);
}

// 确保生成 唯一的 key
function generateUniqueKey(text, allTextArr = []) {
  let key = createKey(text);
  while (checkKeyExist(key, allTextArr)) {
    key = createKey(text);
  }
  return key;
}

function formatKeyPrefixText(text) {
  // 格式化文本，去掉多余的空格
  // 去掉标签符号
  // 去掉标点符号
  // 去掉数字
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export { createKey, checkKeyExist, generateUniqueKey, formatKeyPrefixText };
