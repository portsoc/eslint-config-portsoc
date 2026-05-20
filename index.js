import js from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import prettierConfig from 'eslint-config-prettier';

// University of Portsmouth, School of Computing — ECMAScript code conventions.
//
// ESLint enforces code *quality* here; *formatting* is delegated to Prettier
// (see the bundled .prettierrc.json). `eslint-config-prettier` is appended last
// to switch off any rule that would conflict with the formatter.
export default [
  js.configs.recommended,

  {
    plugins: {
      'import-x': importX,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-var': 'error',
      'require-await': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
      'no-duplicate-imports': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'SequenceExpression',
          message:
            'sequence expressions (using comma operator) are not allowed',
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
      'import-x/no-unresolved': ['error', { commonjs: true }],
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: true },
      ],
    },
  },

  prettierConfig,
];
