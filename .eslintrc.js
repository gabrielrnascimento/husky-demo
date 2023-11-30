module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      semi: ['off'],
      '@typescript-eslint/semi': ['error', 'always'],
    },
  };
  