import 'cypress-xpath';

class addTraineeAction {
  navigateToTraineesSection() {
    cy.visit("http://localhost:5173/dashboard/addTrainee");
    return this;
  }

  assignTrainer(trainerId) {
    cy.get('select[name="trainerId"]').select(2);
    return this;
  }
}
export default addTraineeAction;
