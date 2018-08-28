module.exports = {
  plugins: ["react", "jsx-a11y"],
  extends: ["./common.js"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/aria-role": ["error", { ignoreNonDom: false }],
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/iframe-has-title": "error",

    "react/forbid-prop-types": "warn",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js"],
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: false,
      },
    ],
  },
}
