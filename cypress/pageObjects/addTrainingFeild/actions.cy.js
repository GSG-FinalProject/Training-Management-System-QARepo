require('cypress-xpath');

class addTrainingFeildAction {
  openTMSWbsite() {
    cy.visit("/");
    return this;
  }

  clickonAddButtom() {
    cy.xpath('//*[@id="sidebar"]/ul/li[3]/div[3]/a').click();
    return this;
  }

  addNameTrainingFeild(){
    cy.get("#name").type("Quality assurance");
  }
  addDescriptionTraining(){
    cy.get("#description").type("Cypress Automation Training is a cypress train course done using JavaScript language.");
  }

  clickAddTraining(){
    cy.wait(10000);
   cy.get('.w-auto.btn.btn-outline-primary').should('not.be.disabled').click();
    return this;
  }
  GoToTrainingpage(){
    cy.xpath('//*[@id="sidebar"]/ul/li[2]/div[3]/a').click();
    return this;
  }
}
export default addTrainingFeildAction;
