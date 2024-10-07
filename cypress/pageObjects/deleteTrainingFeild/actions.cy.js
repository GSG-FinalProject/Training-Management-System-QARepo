class deleteTrainingAction{

  clickActionTChooseDelete() {
    cy.get('button.border-0.bg-transparent.dropdown-toggle').eq(0).click(); 
    return this;
  }

  clickDeleteButton() {
    cy.contains('Delete').first().click(); 
    return this;
  }
  clickDeleteConfirmation() {
    cy.get('button.swal2-confirm.swal2-styled').click();
    return this;
  }
}
export default deleteTrainingAction;