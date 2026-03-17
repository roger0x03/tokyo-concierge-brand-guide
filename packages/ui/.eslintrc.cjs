module.exports = {
  extends: [
    '@repo/eslint-config/jsx-and-react.js',
    '@repo/eslint-config/astro'
  ],
  parserOptions: {
    project: './tsconfig.json', // Use the correct tsconfig in the same folder
    tsconfigRootDir: __dirname, // Ensures ESLint looks in the correct directory
  },
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'react/no-unknown-property': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-undef': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['**/*.d.ts'],
      parser: null,
      rules: {}
    }
  ]
};
