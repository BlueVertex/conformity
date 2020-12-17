module.exports = {
    plugins: ['simple-import-sort'],
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
    settings: {
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
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
      ]
    },
    overrides: [
      {
        files: ['*.js'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                // Packages. `react` related packages come first.
                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                ['^@?\\w'],
                // Absolute imports and Relative imports.
                [
                  '^(utils|services|hooks|hoc|types|contexts|dictionary|components)(/.*|$)',
                  '^\\.'
                ],
                // for scss imports.
                ['^[^.]']
              ]
            }
          ]
        }
      }
    ],
    env: {
      browser: true,
      es6: true,
      node: true
    }
  }