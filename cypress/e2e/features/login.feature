Feature: OrangeHRM Login

  @smoke
  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I login with valid credentials
    Then I should see the dashboard

  @smoke
  Scenario: Failed login with invalid credentials
    Given I navigate to the login page
    When I login with invalid credentials
    Then I should see "Invalid credentials" error
    