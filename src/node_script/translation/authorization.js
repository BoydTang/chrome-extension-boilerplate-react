const { flow } = require('lodash');

const tokenJoinerMap = {
  0: '',
  2: '==',
  3: '=',
};

const decode = (auth) => {
  const token = auth
    .replace(/^[^ ]+ [^.]+\.([^.]+).*$/, '$1')
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const joiner = tokenJoinerMap[token.length % 4];

  if (joiner === undefined) {
    throw new Error('Invalid JWT token');
  }

  return flow(
    (str) => Buffer.from(str, 'base64').toString(),
    escape,
    decodeURIComponent,
    JSON.parse
  )(token + joiner);
};

module.exports = {
  decode,
};
