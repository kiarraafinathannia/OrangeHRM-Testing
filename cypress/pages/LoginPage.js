class LoginPage {
  enterUsername(username) {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username)
  }

  enterPassword(password) {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
  }

  clickLogin() {
    cy.get('.oxd-button').click()
  }

  loginAs(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
    }

    validateDashboardVisible() {
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-title', { timeout: 10000 })
    .should('contain', 'Dashboard')
    }
}

module.exports = LoginPage
