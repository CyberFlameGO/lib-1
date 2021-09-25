const {OFF, ERROR} = require('@younho9/eslint-plugin/constants');

module.exports = {
  rules: {
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/ban-types': [
      ERROR,
      {
        types: {
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
