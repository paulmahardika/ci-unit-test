module.exports = {
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__test__/**/*.test.js'],
  moduleFileExtensions: ['js', 'json', 'node'],
};
