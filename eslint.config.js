import globals from 'globals';
import portsoc from './index.js';

// Lints this repository with its own published config.
export default [
  {
    // Intentionally non-conforming fixtures — never lint them directly.
    ignores: ['tests/files/**', 'tests/format/**'],
  },

  ...portsoc,

  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        QUnit: 'readonly',
      },
    },
  },
];
