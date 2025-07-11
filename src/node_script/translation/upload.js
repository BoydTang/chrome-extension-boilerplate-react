const { decode } = require('./authorization');
const axios = require('axios');
const { AM_API_KEY } = require('./dev.env.js');
const fs = require('fs');

const auto_translate_language_codes = ['de', 'es', 'fr', 'it', 'ja'];
const reviews_variant_id = '130baf015dce436d856085b4a88269d5';
const reviews_project_code = 'reviews';

// 从这里获取 https://meerkat.automizely.org/projects/reviews/variants/130baf015dce436d856085b4a88269d5?page=1
const auth = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJiUVJJakd5QjZMX1dJODd1ZW81dGhKdUdGNXZoZGdNc3NFZDNiLXd6WjY4In0.eyJleHAiOjE3NTIzMTI4ODEsImlhdCI6MTc1MjIyNjQ4MSwiYXV0aF90aW1lIjoxNzUxODU1ODQyLCJqdGkiOiI0YzhmMjYxNy1jMjA3LTRjZTUtYjEzMy03Y2EzNGE4MDBhNjMiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmFmdGVyc2hpcC5vcmcvYXV0aC9yZWFsbXMvZW1wbG95ZWUiLCJhdWQiOlsiYnJva2VyIiwiYWRtaW4tcG9ydGFsIiwiYWNjb3VudCJdLCJzdWIiOiI0M2ZjYzZlNDIzZDU0MWE5YWNhMGU5MGZhZGVhNmI1NiIsInR5cCI6IkJlYXJlciIsImF6cCI6Im1lZXJrYXQiLCJub25jZSI6ImI2ODY2ZGFlLTczYmYtNDhkYS05MjYxLWFkNzhkMTJlMjU3YyIsInNlc3Npb25fc3RhdGUiOiJjN2Q2ZGRiOS1mNzA2LTQxZTYtYjlhYS0wZjE3NTExYWMzOTkiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9tZWVya2F0LmF1dG9taXplbHkub3JnIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYnJva2VyIjp7InJvbGVzIjpbInJlYWQtdG9rZW4iXX0sImFkbWluLXBvcnRhbCI6eyJyb2xlcyI6WyJhZnRlcnNoaXAtcmVhZGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiYzdkNmRkYjktZjcwNi00MWU2LWI5YWEtMGYxNzUxMWFjMzk5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJCbyBUYW5nLCBCb3lkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYi50YW5nQGFmdGVyc2hpcC5jb20iLCJnaXZlbl9uYW1lIjoiQm8iLCJmYW1pbHlfbmFtZSI6IlRhbmcsIEJveWQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSWxLUzB6V2s2Y21Ka3ZnQmdvX0hkRFoyU1B1RV9lSmxWSVJHcHRHUmVyaFQ0QlBnPXM5Ni1jIiwiZW1haWwiOiJiLnRhbmdAYWZ0ZXJzaGlwLmNvbSJ9.msOPg-ic7CQIaBrlnCMvGDMaejmj3TCHNqk9B4cI59iBLfx7_ruT9CU_wI0lZ6zX4bT_Fpm7qM0OMfeMcUy-yWpPiO7qTlSKYLOQ9UBQK18Ov-_9bemj8XmrRaUvd26D9PkuCWneCevJnqp_0kb8tu6rczk5lKZOqImjcI7BtsPnOmFkUpJQn8OlYKtfjXdIr0SLX-OjIKAHg7ERuwRwCeXarTitJje_cNV6PvZ7nLSdw-C1GLo5uVs-ItvH3eZlYAMV_92y_cgN4EdtVVKjy-pIzprngm-pwOHZk9BzmXluDHxAZiE_k82hUlyPNrKAM3beAapk9QMNlNfakJisHA`;

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

  const resList = [];
  const validFaildList = [];
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
