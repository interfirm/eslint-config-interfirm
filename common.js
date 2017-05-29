module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },

  "rules": {
    "arrow-parens": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", {
      "code": 100,
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true,
      "tabWidth": 2,
    }],
    "no-irregular-whitespace": ["error", {
      "skipStrings": true,
      "skipComments": true,
      "skipRegExps": true,
      "skipTemplates": true,
    }],
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true,
    }],
    "no-prototype-builtins": "off",
    "no-underscore-dangle": "off",
    "quotes": ["error", "double", {
      "avoidEscape": true,
    }],
    "semi": ["error", "never"],
    "import/no-unresolved": "off",
  },
}
