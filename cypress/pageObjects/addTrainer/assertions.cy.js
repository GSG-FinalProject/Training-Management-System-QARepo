class addTrainerAssertion{

  verifyTrainerExists(trainerName) {
    cy.get('table').should('be.visible'); 
   return this;
  }
}
export default addTrainerAssertion