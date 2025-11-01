# E2E Testing with playwright and BDDTest (Gherkin/Cucumber)

## Setup
- Add new [NAME].feature file to tests/feature with format:
- ```Feature: Navaigate to about page

  Scenario: I visit about page
    Given I am on the home page
    When I click the about quicklink
    Then I should see the text test link
- ```npm run new-test``` will give skeleton [NAME].steps.ts for tests/steps

## Running tests
- Headless/headed mode change use.headless in playwright.config.ts
- ```npm run test``` runs the tests automated
- ```npm run test:gui``` opens gui