module.exports =  {

  "extends": "eslint:recommended",

  "env": {
    "es6": true,
    "node": true
  },

  "globals": {
    "document": "readonly",
    "navigator": "readonly",
    "window": "readonly"
  },

  "rules": {
      "semi": ["error", "always"],
      "no-var": "error"
  }

}