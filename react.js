module.exports = {
  "extends": [
    "airbnb",
    "./common.js",
  ],

  "rules": {
    "react/forbid-prop-types": "warn",
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js"],
    }],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false,
    }],
  },
}
