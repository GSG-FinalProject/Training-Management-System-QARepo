///<reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addTrainingFeildAction from "../../../pageObjects/addTrainingFeild/actions.cy";
import addTriningFeildAssertions from "../../../pageObjects/addTrainingFeild/assertions.cy";

const action = new addTrainingFeildAction();
const assert = new addTriningFeildAssertions();

Given("The Admin is logged into the TMS website", () => {
  cy.login();
});

When('The Admin clicks on the "Add Training Field" form', () => {
  action.clickonAddButtom();
});

When("The Admin enters {string} as the Training Field Name", (name) => {
  action.addNameTrainingFeild();
});

When(
  "The Admin enters {string} as the Training Field Description",
  (description) => {
    action.addDescriptionTraining();
  }
);

When('The Admin clicks the "Add" button', () => {
  action.clickonAddButtom();
});

Then('The Admin should be redirected to the "Training Fields" page', () => {
  action.GoToTrainingpage();
});

Then("The new training field {string} should be listed on the page", (name) => {
  assert.FoundTrainingInpage();
});
