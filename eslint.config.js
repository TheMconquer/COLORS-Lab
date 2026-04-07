module.exports = [
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        console: "readonly",
        alert: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": "off"
    }
  }
];