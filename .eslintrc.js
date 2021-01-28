module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/base",
    "plugin:testing-library/vue"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
