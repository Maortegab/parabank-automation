Feature: User authentication in ParaBank

  As a registered banking user
  I want to log into the ParaBank system
  So that I can access my accounts and banking services


  Background:
    Given the user navigates to the ParaBank login page


  Scenario: Successful login with valid credentials
    Given the user enters a valid username
    And the user enters a valid password
    When the user clicks the login button
    Then the system should authenticate the user
    And the user should see the Accounts Overview page
