import React from 'react';
import './Popup.css';
import { CrawlText } from '../../containers/CrawlText';
import { SearchCode } from '../../containers/SearchCode';
import { GenerateProductReviews } from '../../containers/GenerateProductReviews';

const Popup = () => {
  const [activeTab, setActiveTab] = React.useState('generate_product_reviews');
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
        <button
          onClick={() => {
            setActiveTab('generate_product_reviews');
          }}
          className={activeTab === 'generate_product_reviews' ? 'active' : ''}
        >
          Mock Product Reviews
        </button>
      </div>
      {activeTab === 'extract_text' && <CrawlText />}
      {activeTab === 'search_code' && <SearchCode />}
      {activeTab === 'generate_product_reviews' && <GenerateProductReviews />}
    </div>
  );
};

export default Popup;
