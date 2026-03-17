module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: null,
  },
  plugins: ['react', 'only-warn', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { ignore: ['netlify-honeypot'] }],
    'jsx-a11y/no-static-element-interactions': 'warn',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react/jsx-uses-vars': 'warn',
    'no-console': 'off',
  },
};
