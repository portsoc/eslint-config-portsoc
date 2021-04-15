module.exports = {

  extends: ['eslint:recommended', 'semistandard'],

  plugins: ['import'],

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
    project: ['./tsconfig.json'],
  },

  env: {
    es6: true,
    node: true,
  },

  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'quotes': ['error', 'single', 'avoid-escape'],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'no-var': ['error'],
    'require-await': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-restricted-syntax':
      [
        'error',
        {
          selector: 'SequenceExpression',
          message: 'sequence expressions (using comma operator) are not allowed',
        },
        {
          selector: 'IfStatement[alternate=null] > EmptyStatement.consequent',
          message: 'unexpected empty statement',
        },
        {
          selector: 'IfStatement > EmptyStatement.alternate',
          message: 'unexpected empty statement',
        },
        {
          selector: 'ForInStatement',
          message: 'for…in statements are not allowed',
        },
      ],
    'import/no-unresolved': [2, { commonjs: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        'indent': ['off'],
        '@typescript-eslint/indent': ['error', 2],
        'no-shadow': ['off'],
        '@typescript-eslint/no-shadow': ['error'],
        'default-case': ['off'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        'no-param-reassign': [0],
        'no-restricted-syntax': [0],
        'prefer-destructuring': [0],
        'no-else-return': [0],
        'no-console': [0],
        'no-continue': [0],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'jsx-a11y/no-autofocus': [0],
        'no-cond-assign': ['error', 'except-parens'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/prefer-default-export': [0],
        'import/extensions': [
          'error',
          'always',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'no-underscore-dangle': [0],
        'no-mixed-operators': [0],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      },
    },
  ],
};
