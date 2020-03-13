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

And add the following in your project as `.eslintrc.yml`:

```yaml
extends: portsoc
```

The default environment is Node.js. To lint client-side scripts, add this to your `.eslintrc.yml`:

```yaml
env:
  browser: true
```

Add the following option to your `.eslintrc.yml` to declare that it's the root config of the project:

```yaml
root: true
```

By default ESLint will append configuration files up the directory tree to the home directory, here is a [link](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy) for more details.

Happy linting!

## Contributing

We are always delighted to receive pull requests, even for something as small as a typo.
