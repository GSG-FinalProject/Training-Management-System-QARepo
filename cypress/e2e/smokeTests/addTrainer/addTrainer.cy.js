///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addTrainerAction from '../../../pageObjects/addTrainer/actions.cy';
import addTrainerAssertion from '../../../pageObjects/addTrainer/assertions.cy';

const action = new addTrainerAction();
const assert =new addTrainerAssertion();

Given('The Admin is logged into the TMS website', () => {
  cy.login(); 
});

When('The Admin navigates to the "Trainers" section', () => {
  action.clickTrainerSection();
});

When('The Admin enters the first name {string}', (firstName) => {
  action.addFirstName(firstName);
});

When('The Admin enters the last name {string}', (lastName) => {
  action.addLastName(lastName);
});

When('The Admin enters the email {string}', (email) => {
  action.addEmail(email);
});

When('The Admin enters the password {string}', (password) => {
  action.addPassword(password);
});

When('The Admin adds Trainer Bio {string}', (bio) => {
  action.addBioTrainer(bio);
});

When('The Admin selects training field {string}', (trainingField) => {
  action.selectTrainingField(trainingField);
});

When('The Admin clicks the "Add" button', () => {
  cy.get('button[type="submit"]').click(); 
  cy.wait(2000);
});

When('Admin Redirected to trainer page',()=>{
  cy.wait(2000);
  cy.visit('http://localhost:5173/dashboard/trainers'); 
});
Then('The Admin should see trainer {string} listed on the Trainers page', (trainerName) => {
  assert.verifyTrainerExists(trainerName);
});

