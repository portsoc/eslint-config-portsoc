module.exports = {

  extends: 'semistandard',

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
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
      ],
  },
};
