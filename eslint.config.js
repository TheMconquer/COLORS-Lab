module.exports = [
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        console: "readonly",
        alert: "readonly",
        module: "writable"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": "off",
      "quotes": "off"
    }
  }
];