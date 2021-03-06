module.exports = {
  plugins: ["import", "eslint-comments"],

  extends: ["eslint:recommended"],

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  rules: {
    "arrow-parens": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        tabWidth: 2,
      },
    ],
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: false,
      },
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    semi: ["error", "never"],

    "import/no-useless-path-segments": "error",
    "import/no-mutable-exports": "error",

    "eslint-comments/disable-enable-pair": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
  },
}
