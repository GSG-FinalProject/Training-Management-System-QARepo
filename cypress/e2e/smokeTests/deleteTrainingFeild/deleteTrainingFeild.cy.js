///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addTrainingFeildAction from '../../../pageObjects/addTrainingFeild/actions.cy';
import deleteTrainingAction from '../../../pageObjects/deleteTrainingFeild/actions.cy';
import deleteTrainingAssertion from '../../../pageObjects/deleteTrainingFeild/assertions.cy';

const action = new addTrainingFeildAction();
const act = new deleteTrainingAction();
const assert=new deleteTrainingAssertion();

Given('The Admin is logged into the TMS website', () => {
cy.login();
});


When('The Admin is redirected to the training field page', () => {
action.GoToTrainingpage()

});

When('The Admin clicks the "delete" button', () => {
  act.clickActionTChooseDelete()
});

Then('The Admin should see a confirmation message {string}', (message) => {
act.clickDeleteButton()
cy.wait(1000);
act.clickDeleteConfirmation()
});

Then('The Admin should not see the deleted training field listed on the page', () => {
assert.shouldNotContainRemoved()
act.clickDeleteConfirmation()
});
