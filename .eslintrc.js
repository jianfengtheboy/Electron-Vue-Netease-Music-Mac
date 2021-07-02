module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    'no-console': 'off',
    'space-in-parens': 'off',
    'no-debugger': 'off',
    'no-mixed-operators': 'off',
    'eqeqeq': 'off',
    'no-unused-vars': 'off',
    'camelcase': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'object-curly-even-spacing': 'on',
    'one-var': 'off',
    'indent': 'off',
    'vue/no-unused-components': 'off'
  }
}
