module.exports =  {

  "extends": "semistandard",

  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },

  "env": {
    "es6": true,
    "node": true
  },

  "globals": {
    "document": "readonly",
    "window": "readonly"
  },

  "rules": {
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 0
    }],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
}
