import React from 'react';
import './Popup.css';
import { CrawlText } from '../../containers/CrawlText';
import { SearchCode } from '../../containers/SearchCode';
import { GenerateProductReviews } from '../../containers/GenerateProductReviews';
import { Tabs } from 'antd';

const Popup = () => {
  const [activeTab, setActiveTab] = React.useState('generate_product_reviews');
  const items = [
    {
      key: 'extract_text',
      label: 'Extract Text',
      children: <CrawlText />,
    },
    {
      key: 'search_code',
      label: 'Search Translate Key',
      children: <SearchCode />,
    },
    {
      key: 'generate_product_reviews',
      label: 'Generate Product Reviews',
      children: <GenerateProductReviews />,
    },
  ];

  const onChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="App">
      <Tabs defaultActiveKey={activeTab} items={items} onChange={onChange} />
    </div>
  );
};

export default Popup;
