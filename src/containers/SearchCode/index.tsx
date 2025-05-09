import React from 'react';
import json from '../../contents/result.json';
import './SearchCode.css';

export const SearchCode = () => {
  console.log('json', json);

  const handleSearch = () => {
    const searchStr = (document.getElementById('searchStr') as HTMLInputElement)
      .value;
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
      <div className="searchContainer">
        <input type="text" id="searchStr" placeholder="Search text..." />
        <button className="search" onClick={handleSearch}>
          Search
        </button>
        <button className="copy" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <textarea name="" id="formatResult"></textarea>
    </div>
  );
};
