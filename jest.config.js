module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFiles: ["./tests/setup.js"],
  testMatch: [
    "**/tests/unit/**/*.spec.[jt]s?(x)",
    "**/__tests__/*.[jt]s?(x)",
    "**/src/components/**/*.spec.[jt]s?(x)",
  ],
};
