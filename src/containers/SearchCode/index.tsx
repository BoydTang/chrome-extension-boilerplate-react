import React from 'react';
import json from '../../node_script/translation/result.json';
import './SearchCode.css';
import { Button, Input, Space, Flex } from 'antd';

export const SearchCode = () => {
  const [searchStr, setSearchStr] = React.useState('');
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };
  const handleSearch = () => {
    const result = json.filter((item) => {
      return item.value === searchStr;
    });
    const formatResult = document.getElementById(
      'formatResult'
    ) as HTMLTextAreaElement;
    if (result.length === 0) {
      alert('No result found');
      formatResult.value = '';
      return;
    }

    formatResult.value = `t('${result[0].key}', '${result[0].value}')`;
  };

  const handleCopy = () => {
    const formatResult = document.getElementById(
      'formatResult'
    ) as HTMLTextAreaElement;
    formatResult.select();
    document.execCommand('copy');
  };
  return (
    <div className="SearchCode">
      <Flex gap="small" vertical>
        <Space.Compact style={{ width: '100%' }}>
          <Input
            defaultValue={searchStr}
            onChange={onInput}
            size="large"
            type="text"
          />
          <Button type="primary" onClick={handleSearch} size="large">
            Search
          </Button>
          <Button type="primary" onClick={handleCopy} size="large">
            Copy
          </Button>
        </Space.Compact>
        <textarea name="" id="formatResult"></textarea>
      </Flex>
    </div>
  );
};
