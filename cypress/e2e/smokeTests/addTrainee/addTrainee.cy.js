///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addTraineeAction from '../../../pageObjects/addTrainee/actions.cy';
import addTraineeAssertion from '../../../pageObjects/addTrainee/assertions.cy';
import addTrainerAction from '../../../pageObjects/addTrainer/actions.cy';

const action = new addTraineeAction();
const act = new addTrainerAction();
const assert = new addTraineeAssertion();

Given('The Admin is logged into the TMS website', () => {
  cy.login(); 
});

When('The Admin navigates to the "Trainees" section', () => {
  cy.wait(1000);
  action.navigateToTraineesSection(); 
});

When('The Admin enters the first name {string}', (firstName) => {
  act.addFirstName(firstName); 
});

When('The Admin enters the last name {string}', (lastName) => {
  act.addLastName(lastName); 
});

When('The Admin enters the email {string}', (email) => {
  act.addEmail(email); 
});

When('The Admin enters the password {string}', (password) => {
  act.addPassword(password);
});

When('The Admin assigns trainer to trainee', () => {
  action.assignTrainer(); 
});

When('The Admin clicks the "Add" button', () => {
  act.clickAddButton();
});

Then('Admin is redirected to the trainee page', () => {
  assert.verifyRedirectionToTraineePage(); 
});

Then('The Admin should see the trainee on the trainee page', () => {
  assert.verifyTraineeExists('sara malak');
});
