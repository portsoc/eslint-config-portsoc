# Changelog

## 2.0.0 (2026-05-20)

Breaking change — modernised for the current ESLint ecosystem:

- migrated to ESLint 9 flat config (`eslint.config.js`); the old `.eslintrc` / `extends: portsoc` format is no longer supported
- dropped the abandoned `eslint-config-standard`; the config is now self-contained on `@eslint/js` recommended plus our code-quality rules
- formatting is now delegated to Prettier (single quotes); ESLint no longer enforces stylistic rules
- parser bumped to `ecmaVersion: 'latest'` so modern JS syntax is recognised
- switched to the maintained `eslint-plugin-import-x`
- CI updated to Node 20/22/24 and current GitHub Actions

## 1.0.0 (2022-01-29)

- upgraded to Eslint 8
- long-term stable, so we'll brave releasing version 1.0.0
