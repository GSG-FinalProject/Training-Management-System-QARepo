class deleteTrainingAssertion{
shouldNotContainRemoved(){
    cy.get('table tbody').should('not.contain', 'Python Backend'); 
    return this;

}

}
export default deleteTrainingAssertion;