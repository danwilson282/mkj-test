Feature: Navaigate to about page

  Scenario: I visit about page
    Given I am on the home page
    When I click the about quicklink
    Then I should see the text test link