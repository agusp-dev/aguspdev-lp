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
    'plugin:react/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', 'src']],
      },
    },
  },
  rules: {
    semi: RULES.OFF,
    'max-len': [RULES.ERROR, { code: 120 }],
    'no-unused-vars': [RULES.ERROR, { vars: 'all' }],
    'import/prefer-default-export': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'react/function-component-definition': RULES.OFF,
    'react/jsx-filename-extension': [0],
  },
};
