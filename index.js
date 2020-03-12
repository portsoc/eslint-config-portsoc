module.exports =  {

  "extends": "eslint:recommended",

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
      "semi": ["error", "always"],
      "no-var": "error"
  }

}