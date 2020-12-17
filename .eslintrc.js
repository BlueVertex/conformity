module.exports = {
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 130,
        tabWidth: 4,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'vue/max-attributes-per-line': 'off'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
}