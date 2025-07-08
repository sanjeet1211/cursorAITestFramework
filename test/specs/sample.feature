Feature: Sample Login Feature
  As a user
  I want to login to the application
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should see the secure area 