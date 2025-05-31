import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../support/pages/loginPage';

const loginPage = new LoginPage();

Given('I navigate to the login page', () => {
  cy.visit('/');
});

When('I login with valid credentials', () => {
  cy.fixture('users').then((users) => {
    loginPage.login(users.valid.username, users.valid.password);
  });
});

When('I login with invalid credentials', () => {
  cy.fixture('users').then((users) => {
    loginPage.login(users.invalid.username, users.invalid.password);
  });
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see {string} error', (message) => {
  loginPage.elements.error().should('be.visible').and('have.text', message);
});

When('I enter {string} and {string}', (username, password) => {
  if (username) {
    loginPage.elements.username().type(username);
  }
  if (password) {
    loginPage.elements.password().type(password);
  }
});

When('I press Login button', () => {
  loginPage.elements.submit().click();
});

Then('I should see {string} message', (errorMessage) => {
  loginPage.elements
    .fieldValidationError()
    .should('be.visible')
    .and('have.text', errorMessage);
});
