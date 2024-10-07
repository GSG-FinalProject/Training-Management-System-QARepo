Feature: Admin Add a Trainee

  Scenario: Successful addition of a trainee
    Given The Admin is logged into the TMS website
    When The Admin navigates to the "Trainees" section
    And The Admin enters the first name "sara"
    And The Admin enters the last name "malak"
    And The Admin enters the email "saramalak@example.com"
    And The Admin enters the password "sara123"
    And The Admin asssign trainer to trainee
    And The Admin clicks the "Add" button
    And Admin Redirected to trainee page
    Then The Admin should see trainee in trainee Page