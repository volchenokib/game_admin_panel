module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  globals: {},
  parserOptions: {
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 8,
      sourceType: "module",
    },
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "prettier"],

  rules: {
    "no-console": 1,
    "no-debugger": 1,
    // strongly Recommended
    "vue/no-template-shadow": 2,
    "vue/prop-name-casing": 2,
    "vue/require-default-prop": 2,
    "vue/require-prop-types": 2,
    "vue/v-bind-style": 2,
    "vue/v-on-style": 2,
    "vue/v-slot-style": 2,
    // recommended
    "vue/attributes-order": 2,
    "vue/no-v-html": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
  },
};
