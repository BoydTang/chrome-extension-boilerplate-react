import React from 'react';
import './Popup.css';
import { CrawlText } from '../../containers/CrawlText';
import { SearchCode } from '../../containers/SearchCode';

const Popup = () => {
  const [activeTab, setActiveTab] = React.useState('search_code');
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setActiveTab('extract_text');
          }}
          className={activeTab === 'extract_text' ? 'active' : ''}
        >
          Extract text
        </button>
        <button
          onClick={() => {
            setActiveTab('search_code');
          }}
          className={activeTab === 'search_code' ? 'active' : ''}
        >
          Search code
        </button>
      </div>
      {activeTab === 'extract_text' && <CrawlText />}
      {activeTab === 'search_code' && <SearchCode />}
    </div>
  );
};

export default Popup;
