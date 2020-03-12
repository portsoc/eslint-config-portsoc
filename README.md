# eslint-confi-portsoc

A shareable config for ESLint.

```
Alice: "Other people's ESLint configs suck."
Bob:   "We should totes build our own."
Alice: "IKR?"
Bob:   "Hold my beer."
```

If you are submitting JS coursework, linting with this config should help you create code that's easy for your assesor to interpret.


## Installation

For the stable version:

```sh
npm i --save-dev eslint eslint-config-portsoc
```

For the latest development version:

```sh
npm i --save-dev eslint portsoc/eslint-config-portsoc
```

And add the following in your project as `.eslintrc`:

```yaml
extends: portsoc
```

Happy linting!
