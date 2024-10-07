Feature: Admin delete a Training Field

  Scenario: Successful Deletion of a training field 
    Given The Admin is logged into the TMS website
    When The Admin is redirected to the training field page
    And The Admin clicks the "delete" button
    Then The Admin should see a confirmation message "Training field deleted successfully"
    And The Admin should not see the deleted training field listed on the page
