class addTriningFeildAssertions {
  FoundTrainingInpage() {
    cy.get("tbody > :nth-child(3) > :nth-child(2)")
      .should("exist")
      .should("have.text", "Quality assurance").invoke('css', 'background-color', 'green');
  }
}
export default addTriningFeildAssertions;
