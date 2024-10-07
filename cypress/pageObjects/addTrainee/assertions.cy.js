class addTraineeAssertion {
  verifyRedirectionToTraineePage() {
    cy.wait(1000);
    cy.url().should('include', '/trainees'); 
    return this;
  }

  verifyTraineeExists(traineeName) {
    cy.get('table tbody').should('be.visible'); 
    cy.contains('td', traineeName).should('exist'); 
    return this;
  }
}

export default addTraineeAssertion;
