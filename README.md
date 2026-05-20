# eslint-config-portsoc

An ESLint config created for students and staff within the School of Computing at University of Portsmouth. Other devs are very welcome to use it or fork the repo.

If you are a...

- student submitting JS coursework, linting with this config should help you create code that's easy for your assessor to interpret.

- staff member producing code for students to learn from, linting with this config will produce consistent code that reduces cognitive load.

For TypeScript projects, please use [`eslint-config-portsoc-ts`](https://github.com/portsoc/eslint-config-portsoc-ts).

This is a [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) for **ESLint 9+**. ESLint enforces _code quality_; _formatting_ is delegated to [Prettier](https://prettier.io/) (the modern split recommended by the ESLint team).

> **Upgrading from 1.x?** Version 2 is a breaking change: it requires ESLint 9, uses the `eslint.config.js` flat config format (the old `.eslintrc` / `extends: portsoc` style no longer works), and hands formatting to Prettier.

## Installation

Install straight from this GitHub repository (this always tracks the latest version):

```sh
npm i --save-dev eslint prettier portsoc/eslint-config-portsoc
```

> **Note:** the [`eslint-config-portsoc`](https://www.npmjs.com/package/eslint-config-portsoc) package on npm is stuck at `1.x` (ESLint 8) and can no longer be published to. For v2 (ESLint 9 + Prettier), install from GitHub as above.

## Configuration

Create an `eslint.config.mjs` file in the root of your project:

```js
import portsoc from 'eslint-config-portsoc';

export default [...portsoc];
```

> The config is an ES module. Use the `.mjs` extension (as above) so it loads regardless of your project's settings, or set `"type": "module"` in your `package.json` and name the file `eslint.config.js`.

The default environment is Node.js. To lint client-side (browser) scripts, add the browser globals. Install the [`globals`](https://www.npmjs.com/package/globals) package and extend the config:

```js
import globals from 'globals';
import portsoc from 'eslint-config-portsoc';

export default [
  ...portsoc,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
```

## Formatting with Prettier

This package does not enforce formatting itself — add Prettier and a `.prettierrc.json` matching our conventions (single quotes; everything else is Prettier's default):

```json
{
  "singleQuote": true
}
```

Suggested `package.json` scripts:

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

Run `npm run format` to auto-fix layout, and `npm run lint` to catch code-quality issues.

Happy linting!

## Contributing

We are always delighted to receive pull requests, even for something as small as a typo.
