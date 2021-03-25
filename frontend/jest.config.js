module.exports = {
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  verbose: true,
};
