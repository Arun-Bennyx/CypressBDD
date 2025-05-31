import { When } from '@badeball/cypress-cucumber-preprocessor';

export class LoginPage {
  elements = {
    username: () => cy.get('[name="username"]'),
    password: () => cy.get('[name="password"]'),
    submit: () => cy.get('button[type="submit"]'),
    error: () => cy.get('.oxd-alert-content-text'),
    fieldValidationError: () => cy.get('.oxd-input-group__message'),
  };

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.submit().click();
  }
}
