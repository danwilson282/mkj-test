export default {
  default: {
    require: [
      "ts-node/register",
      "tests/steps/**/*.ts"
    ],
    format: [
      "@cucumber/pretty-formatter",
      "@cucumber/html-formatter:reports/cucumber-report.html"
    ],
    paths: ["tests/features/**/*.feature"],
    publishQuiet: true
  }
}