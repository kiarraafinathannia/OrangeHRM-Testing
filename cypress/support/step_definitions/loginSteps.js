const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')

const loginPage = new LoginPage()

Given('user is on the login page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('user logs in using username {string} and password {string}', (username, password) => {
  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
})

When('user click the login button', () => {
    loginPage.clickLogin()
})

Then('user should see the dashboard page', () => {
  cy.url().should('include', '/web/index.php/dashboard/index')
  cy.get('.oxd-topbar-header-title', { timeout: 10000 })
.should('contain', 'Dashboard')
  cy.screenshot({ overwrite: true })
})

Given('user is logged in as {string} with {string}', (username, password) => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  loginPage.loginAs(username, password)
  loginPage.validateDashboardVisible()
})

Given('user is logged in with fixture credentials', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.fixture('credentials').then((creds) => {
    loginPage.enterUsername(creds.username)
    loginPage.enterPassword(creds.password)
    loginPage.clickLogin()
  })
})
