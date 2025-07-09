import React, { useState } from 'react';
import { generateCSV } from '../../node_script/mock_reviews/utils';
import { Button, Input, Space } from 'antd';

export const GenerateProductReviews = () => {
  const [count, setCount] = useState(10);
  const handleOnChangeCount = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      setCount(Number(value));
    } else {
      alert('Please enter a valid number');
    }
  };

  const handleGenerateReviews = () => {
    console.log(`Generating ${count} product reviews...`);
    const content = generateCSV(count);
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    chrome.runtime.sendMessage(
      {
        action: 'downloadCSV',
        url: url,
        fileName: `generated_product_reviews.csv`,
        saveAs: true,
      },
      (response) => {
        if (response && response.success) {
          console.log('CSV download initiated successfully.');
        } else {
          console.error('Failed to initiate CSV download.');
        }
      }
    );
  };
  return (
    <div>
      <h1>Generate Product Reviews</h1>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          defaultValue={count}
          onChange={handleOnChangeCount}
          size="large"
          type="number"
        />
        <Button type="primary" onClick={handleGenerateReviews} size="large">
          Generate Reviews
        </Button>
      </Space.Compact>
    </div>
  );
};
