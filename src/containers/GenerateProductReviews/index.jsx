import React, { useState } from 'react';
import { generateCSV } from '../../node_script/mock_reviews/utils';
import { Button, Input, Form } from 'antd';

export const GenerateProductReviews = () => {
  const [form] = Form.useForm();
  const [count, setCount] = useState(10);
  const [content, setContent] = useState('');
  const [handle, setHandle] = useState('');
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
  const handleOnChangeHandle = (event) => {
    const value = event.target.value;
    setHandle(value);
  };

  const handleGenerateReviews = () => {
    console.log(`Generating ${count} product reviews...`);
    const generatedContent = generateCSV(count, content, handle);
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
        <Form.Item label="Handle" name="handle">
          <Input
            defaultValue={handle}
            onChange={handleOnChangeHandle}
            size="large"
            type="text"
          />
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
