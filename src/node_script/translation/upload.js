const { decode } = require('./authorization');
const axios = require('axios');
const {
  AM_API_KEY,
  auth,
  variant_id,
  project_code,
  language_codes,
} = require('./dev.env.js');
const fs = require('fs');

const auto_translate_language_codes = language_codes;
const reviews_variant_id = variant_id;
const reviews_project_code = project_code;

const handleUploadToMeerkat = (key, text) => {
  if (!key || !text) {
    return;
  }

  const jwtObject = decode(auth);

  console.log('start uploadToMeerkat --->', key, text);

  const url = 'https://meerkat.aftership.org/meerkat/v2/employee/resources';
  const data = {
    variant_id: reviews_variant_id,
    project_code: reviews_project_code,
    metadata: '{}',
    resource_code: key,
    allow_business_override: false,
    translations: [
      {
        language_code: 'en',
        content: text,
      },
    ],
    auto_translate_language_codes: auto_translate_language_codes,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          authorization: auth,
          'Am-Account-Id': jwtObject.account_id,
          'Am-Api-Key': AM_API_KEY,
        },
      })
      .then((response) => {
        resolve({
          key,
          text,
          response: response.data,
        });
      })
      .catch((error) => {
        resolve({
          key,
          text,
          response: error.response.data,
        });
      });
  });
};

const uploadJSONFile = (filePath) => {
  if (!filePath) {
    console.error('File path is required');
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(data)) {
      console.error('JSON file must contain an array of objects');
      return;
    }
    const feathList = [];
    data.forEach((item) => {
      if (item.key && item.value) {
        feathList.push(handleUploadToMeerkat(item.key, item.value));
      } else {
        console.warn('Item is missing key or value:', item);
      }
    });
    Promise.all(feathList)
      .then((results) => {
        results.forEach((result) => {
          console.log('Upload result: --->', result);
        });
      })
      .catch((error) => {
        console.error('Error in uploading:', error);
      });
  } catch (error) {
    console.error('Error reading or parsing file:', error);
  }
};

// handleUploadToMeerkat('TEST_1_848CE8', 'test-12222');

uploadJSONFile('./temp/import-reviews.json');
