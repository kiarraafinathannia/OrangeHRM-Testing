Feature: Login OrangeHRM and Manage Admin

  Scenario Outline: User logs in with valid credentials
    Given user is on the login page
        When user logs in using username "<username>" and password "<password>"
        And user click the login button
        Then user should see the dashboard page

        Examples:
        | username | password  |
        | Admin    | admin123  |


  Scenario Outline: Add new admin user
  
    Given user is logged in as "<username>" with "<password>"
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>" and employee name "<name>" with password "<password>"
    And user click the save button
    Then the admin "<newUsername>" should appear in the user list

        Examples:
        | username | password  | newUsername  | role       | name     |
        | Admin    | admin123  | cypressuser111 | ESS        | Mert Tuna |
        | Admin    | admin123  | cypressuser222 | Admin      | Mert Tuna   |

  Scenario Outline: Search for non-existent admin user
    Given user is logged in with fixture credentials
    And user navigates to Admin page
    When user searches for admin "<nonExistentUser>"
    Then user should see "No Records Found" in the results

    Examples:
    | nonExistentUser   |
    | tidakadauser999   |

    



    

    
    
    
