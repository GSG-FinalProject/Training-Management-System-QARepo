Feature: Admin Adds a Training Field

  Scenario: Successful addition of a training field with valid inputs
    Given The Admin is logged into the TMS website
    When The Admin clicks on the "Add Training Field" form
    And The Admin enters "QA" as the Training Field Name
    And The Admin enters "This field focuses on automation Test." as the Training Field Description
    And The Admin clicks the "Add" button
    Then The Admin should be redirected to the "Training Fields" page
    And The new training field "QA" should be listed on the page
