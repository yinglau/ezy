module.exports = {
  parser: 'babel-eslint',
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard"
  ],
  "plugins": [
    "redux-saga",
    "react",
    "flowtype",
  ],
  rules: {
    "no-console": 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
  },
  settings: {
    react: {
      version: '15.0'
    }
  }
};
