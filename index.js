module.exports = {
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    // 允许在 for 循环中使用 ++
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "import/prefer-default-export": "off",
  },
  extends: [
    "eslint-config-airbnb-typescript",
    "eslint-config-airbnb/hooks",
    "eslint-config-prettier",
    "eslint-config-prettier/@typescript-eslint",
    "eslint-config-prettier/react",
  ].map(require.resolve),
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        // props 检查交由 ts 处理
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
