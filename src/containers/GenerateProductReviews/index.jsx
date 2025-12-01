import React, { useState } from 'react';
import {
  generateCSV,
  handles as allHandles,
} from '../../node_script/mock_reviews/utils';
import { Button, Input, Form, Checkbox, Select } from 'antd';

export const GenerateProductReviews = () => {
  const [form] = Form.useForm();
  const [count, setCount] = useState(10);
  const [content, setContent] = useState('');
  const [handles, setHandles] = useState([]);
  const [onlyPublished, setOnlyPublished] = useState(false);
  const options = allHandles.map((handle) => ({
    label: handle,
    value: handle,
  }));

  const handleOnChangeCount = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      setCount(Number(value));
    } else {
      alert('Please enter a valid number');
    }
  };
  const handleOnChangeContent = (event) => {
    const value = event.target.value;
    setContent(value);
  };

  const handleHandlesChange = (value) => {
    console.log(`Selected handles: ${value}`);
    setHandles(value);
  };

  const handleOnChangePublishedStatus = (event) => {
    const value = event.target.checked;
    setOnlyPublished(value);
  };

  const handleGenerateReviews = () => {
    console.log(`Generating ${count} product reviews...`);
    const generatedContent = generateCSV(
      count,
      content,
      handles,
      onlyPublished
    );
    const blob = new Blob([generatedContent], {
      type: 'text/csv;charset=utf-8',
    });
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
      <Form layout="horizontal" form={form}>
        <Form.Item label="Count" name="count">
          <Input
            defaultValue={count}
            onChange={handleOnChangeCount}
            size="large"
            type="number"
          />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input
            defaultValue={content}
            onChange={handleOnChangeContent}
            size="large"
            type="text"
          />
        </Form.Item>
        <Form.Item label="Handles" name="handles">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            onChange={handleHandlesChange}
            tokenSeparators={[',']}
            options={options}
          />
        </Form.Item>
        <Form.Item label="Published status" name="publishedStatus">
          <Checkbox
            defaultChecked={onlyPublished}
            onChange={handleOnChangePublishedStatus}
          >
            Only Published
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleGenerateReviews} size="large">
            Generate Reviews
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
