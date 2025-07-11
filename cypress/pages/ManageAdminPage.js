class AdminPage {
  navigateToAdminPage() {
    cy.get('.oxd-main-menu-item').contains('Admin').click()
  }

  addNewAdmin(username, role, name, password) {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()

    // Pilih Role
    cy.get('label').contains('User Role')
        .parents('.oxd-input-group')
        .find('.oxd-select-text').click()
    cy.get('.oxd-select-option').contains(role).click()

    // Isi Employee Name (autocomplete)
    cy.get('input[placeholder="Type for hints..."]').type(name)
    cy.contains('.oxd-autocomplete-option', name, { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })

    // Pilih Status: Enabled
    cy.get('label').contains('Status')
        .parents('.oxd-input-group')
        .find('.oxd-select-text').click()
    cy.get('.oxd-select-option').contains('Enabled').click()

    // Isi Username
    cy.get('input[autocomplete="off"]').eq(0).type(username)

    // Isi Password dan Confirm Password
    cy.get('input[type="password"]').eq(0).type(password)
    cy.get('input[type="password"]').eq(1).type(password)

    // Klik Save
    
    }
    clicksave() {
        cy.contains('button', 'Save').click()
    }


   searchAdmin(username) {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').clear().type(username)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
   }

   assertAdminExists(username) {
     cy.get('.oxd-table-cell').should('contain', username)
   }

   assertNoRecordsFound() {
     cy.contains('No Records Found').should('be.visible')
   }
}

module.exports = AdminPage
