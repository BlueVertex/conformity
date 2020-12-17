module.exports = {
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
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
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
}