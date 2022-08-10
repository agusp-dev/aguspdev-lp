module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'body-max-line-length': [2, 'always', 1000],
    'footer-max-line-length': [2, 'always', 1000],
    'header-max-length': [2, 'always', 1000],
  },
}
