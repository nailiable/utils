const antfu = require("@antfu/eslint-config");

module.exports = antfu.default({
  rules: {
    "ts/no-explicit-any": "error",
    "ts/no-namespace": "off",
    "ts/no-redeclare": "off",
  },
});
