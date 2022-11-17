module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  forceExit: true,
  clearMocks: true,
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
