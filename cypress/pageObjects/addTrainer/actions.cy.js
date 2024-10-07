require('cypress-xpath');

class addTrainerAction {
  clickTrainerSection() {
    cy.xpath('//*[@id="sidebar"]/ul/li[3]/div[1]/a').click();
  }

  addFirstName(firstName) {
    cy.get("#firstName").type(firstName);
    return this;
  }

  addLastName(lastName) {
    cy.get("#lastName").type(lastName);
    return this;
  }

  addEmail(email) {
    cy.get("#email").type(email);
    return this;
  }

  addPassword(password) {
    cy.get("#password").type(password); 
    return this;
  }

  addBioTrainer(bio) {
    cy.get("#bio").type(bio);
    return this;
  }

  selectTrainingField(trainingField) {
    cy.get('select.form-select').select(trainingField);
    return this;
  }

  clickAddButton() {
    cy.get('button[type="submit"]').click(); 
    return this;
  }
}

export default addTrainerAction;
