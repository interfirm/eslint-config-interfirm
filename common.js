module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },

  "plugins": [
    "eslint-comments",
  ],

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
    "object-shorthand": ["error", "always", {
      "avoidQuotes": false,
    }],
    "quotes": ["error", "double", {
      "avoidEscape": true,
    }],
    "semi": ["error", "never"],
    "import/no-unresolved": "off",
    "eslint-comments/disable-enable-pair": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/no-use": "off",
  },
}
