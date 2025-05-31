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

  @regression
  Scenario: Validate login error for missing username or password
    Given I navigate to the login page
    When I enter "<username>" and "<password>"
    And I press Login button
    Then I should see "<error>" message

    Examples:
      | username | password | error    |
      |          | admin123 | Required |
      | Admin    |          | Required |