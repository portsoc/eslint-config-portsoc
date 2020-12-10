# eslint-config-portsoc

An ESLint config created for students and staff within the School of Computing at University of Portsmouth.  Other devs are very welcome to use it or fork the repo.

If you are a...

* student submitting JS coursework, linting with this config should help you create code that's easy for your assessor to interpret.

* staff member producing code for students to learn from, linting with this config will produce consistent code that reduces cognitive load.


## Installation

For the stable version:

```sh
npm i --save-dev eslint eslint-config-portsoc
```

For the latest development version:

```sh
npm i --save-dev eslint portsoc/eslint-config-portsoc
```


## Configuration
Configuration can be stored as a YAML file or added to `package.json`.  For example, add the following in your project as `.eslintrc.yml`:

```yaml
extends: portsoc
root: true
```

The default environment is Node.js. To lint client-side scripts, add this to your `.eslintrc.yml`:

```yaml
env:
  browser: true
```

To achieve all the above using `package.json` add the following:

```json
  "eslintConfig": {
    "extends": "portsoc",
    "root": true,
    "env": {
      "browser": true
    }
  }
```

Happy linting!

## Contributing

We are always delighted to receive pull requests, even for something as small as a typo.
