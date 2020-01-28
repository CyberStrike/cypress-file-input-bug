module.exports = {
  root: true,
  env: { node: true, browser: true, es6: true, jquery: true, mocha: true },
  extends: ['plugin:vue/essential', '@vue/standard', 'plugin:cypress/recommended', 'plugin:chai-friendly/recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
