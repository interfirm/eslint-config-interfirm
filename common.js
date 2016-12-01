module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    "arrow-parens": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", {
      code: 100,
      tabWidth: 2,
    }],
    "no-prototype-builtins": "off",
    "no-underscore-dangle": "off",
    quotes: ["error", "double", {
      avoidEscape: true,
    }],
    semi: ["error", "never"],
    "import/no-unresolved": "off",
  },
}
