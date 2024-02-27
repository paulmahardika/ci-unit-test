module.exports = {
  coverageThreshold: {
    global: {
      lines: 60,
    },
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__test__/**/*.test.js'],
  moduleFileExtensions: ['js', 'json', 'node'],
};
