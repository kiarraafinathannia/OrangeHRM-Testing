const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const AdminPage = require('../../pages/ManageAdminPage')

const adminPage = new AdminPage()

When('user navigates to Admin page', () => {
  adminPage.navigateToAdminPage()
})

When(
  'user adds a new admin {string} with role {string} and employee name {string} with password {string}',
  (newUsername, role, empName, userPassword) => {
    adminPage.addNewAdmin(newUsername, role, empName, userPassword)
  }
)

When('user click the save button', () => {
    adminPage.clicksave()
    cy.wait(1000)
    cy.contains('Success').should('exist')
})

Then('the admin {string} should appear in the user list', (username) => {
  adminPage.searchAdmin(username)
  adminPage.assertAdminExists(username)
  cy.wait(1000)
  cy.screenshot({ overwrite: true })
})

When('user searches for admin {string}', (username) => {
  adminPage.searchAdmin(username)
})

Then('user should see {string} in the results', (text) => {
  if (text === 'No Records Found') {
    adminPage.assertNoRecordsFound()
    cy.wait(1000)
    cy.screenshot({ overwrite: true })
  } else {
    cy.contains(text).should('be.visible')
    cy.screenshot({ overwrite: true })
  }
})
