Feature: Admin Add a Trainer

  Scenario: Successful addition of a trainer
    Given The Admin is logged into the TMS website
    When The Admin navigates to the "Trainers" section
    And The Admin enters the first name "ahmad"
    And The Admin enters the last name "naser"
    And The Admin enters the email "ahmad@example.com"
    And The Admin enters the password "ahRTR12"
    And The Admin adds Trainer Bio "Android Trainer"
    And The Admin selects training field "Mobile Application"
    And The Admin clicks the "Add" button
    And Admin Redirected to trainer page
    Then The Admin should see trainer "Osaid Makhalfih" listed on the Trainers page

