Cypress.Commands.add('login', () => {
cy.visit('/');
cy.fixture('loginCredentials.json').then((loginData) => {
  cy.get('#email').type(loginData.email);
  cy.get('#password').type(loginData.password);
  cy.wait(2000);
  cy.contains('Login').click();
  });
});




