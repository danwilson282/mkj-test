Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I log in with valid credentials
    Then I should see the dashboard