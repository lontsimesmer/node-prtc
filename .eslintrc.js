const { auto } = require('async');

module.exports = {
  rules: {
    'prettier/prettier': ['error', { endOfLine: auto }],
  },
};
