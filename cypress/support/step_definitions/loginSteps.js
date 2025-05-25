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
