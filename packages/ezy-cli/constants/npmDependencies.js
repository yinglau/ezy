const packages = {
  'Web': {
    'dependencies': {
      '@babel/polyfill': '7.0.0',
      'connected-react-router': '4.5.0',
      'history': '4.7.2',
      'hoist-non-react-statics': '3.0.1',
      'immutable': '4.0.0-rc.12',
      'invariant': '2.2.4',
      'loadable-components': '2.2.3',
      'lodash': '4.17.11',
      'prop-types': '15.6.2',
      'react': '16.6.3',
      'react-dom': '16.6.3',
      'react-redux': '5.0.7',
      'react-router-dom': '4.3.1',
      'redux': '4.0.1',
      'redux-immutable': '4.0.0',
      'redux-saga': '0.16.2',
      'reselect': '4.0.0'
    },
    'devDependencies': {
      '@babel/core': '7.2.2',
      '@babel/plugin-proposal-class-properties': '7.2.1',
      '@babel/plugin-syntax-dynamic-import': '7.2.0',
      '@babel/plugin-transform-modules-commonjs': '7.2.0',
      '@babel/preset-env': '7.2.0',
      '@babel/preset-flow': '7.0.0',
      '@babel/preset-react': '7.0.0',
      'babel-core': '7.0.0-bridge.0',
      'babel-eslint': '10.0.1',
      'babel-jest': '23.6.0',
      'babel-loader': '8.0.4',
      'babel-plugin-dynamic-import-node': '2.2.0',
      'babel-plugin-lodash': '3.3.4',
      'babel-plugin-transform-react-remove-prop-types': '0.4.21',
      'chalk': '2.4.1',
      'cross-env': '5.2.0',
      'css-loader': '2.0.0',
      'enzyme': '3.8.0',
      'enzyme-adapter-react-16': '1.7.1',
      'enzyme-to-json': '3.3.5',
      'eslint': '5.10.0',
      'eslint-config-standard': '12.0.0',
      'eslint-plugin-flowtype': '3.2.0',
      'eslint-plugin-import': '2.14.0',
      'eslint-plugin-node': '8.0.0',
      'eslint-plugin-promise': '4.0.1',
      'eslint-plugin-react': '7.11.1',
      'eslint-plugin-redux-saga': '0.10.0',
      'eslint-plugin-standard': '4.0.0',
      'express': '4.16.4',
      'flow-bin': '0.89.0',
      'flowtype': '2.0.0',
      'get-port': '4.0.0',
      'html-webpack-plugin': '3.2.0',
      'husky': '1.3.0',
      'jest': '23.6.0',
      'lint-staged': '8.1.0',
      'plop': '2.2.0',
      'style-loader': '0.23.1',
      'webpack': '4.27.1',
      'webpack-cli': '3.1.2',
      'webpack-dev-middleware': '3.4.0',
      'webpack-hot-middleware': '2.24.3'
    }
  }
}

function getDependencies (type) {
  const needs = packages[type]
  const dependenciesKeys = Object.keys(needs['dependencies'])
  const devDependenciesKeys = Object.keys(needs['devDependencies'])
  const dependencies = dependenciesKeys.map(item => (`${item}@${needs['dependencies'][item]}`))
  const devDependencies = devDependenciesKeys.map(item => (`${item}@${needs['devDependencies'][item]}`))
  return {
    dependencies,
    devDependencies
  }
}

module.exports = getDependencies