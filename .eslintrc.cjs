const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {},
  rules: {
    semi: RULES.OFF,
    'max-len': [RULES.ERROR, { code: 120 }],
    'no-unused-vars': [RULES.ERROR, { vars: 'all' }],
    'import/prefer-default-export': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'react/function-component-definition': RULES.OFF,
    'react/jsx-filename-extension': [0],
    'import/extensions': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'import/named': RULES.OFF,
    'comma-dangle': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    quotes: [RULES.ERROR, 'single', 'avoid-escape'],
    'jsx-quotes': [RULES.ERROR, 'prefer-single'],
  },
};
