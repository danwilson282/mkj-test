Feature: Already logged in

  Scenario: Successful login
    Given I am logged in
    When I visit the dashboard page
    Then I should be logged in