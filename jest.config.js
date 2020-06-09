
/**
 * This config is not complete, it's just expanding the default coming from:
 * https://github.com/just-jeb/angular-builders/blob/master/packages/jest/src/jest-config/default-config.ts
 *
 * Documentation:
 * https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
 */
module.exports = {
  /**
   * Make Coverlay able to read coverage reports
   * @url https://w.amazon.com/bin/view/Coverlay/FAQ/
   */
  coverageReporters: [
      'cobertura',
      'json',
      'lcov',
      'text',
  ],
  /**
   * Needed to transform packages with Babel
   * @url https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization
   */
  transformIgnorePatterns: ['node_modules/(?!(@ngrx|lodash-es|jest-test))']
};
