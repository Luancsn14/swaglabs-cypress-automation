describe('Login', () => {
    it('Successfully', () => {  
      cy.login()

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    })

    it('Failed: Locked out user', () => {
      const user = Cypress.env('locked_out_user')
      const password = Cypress.env('user_password')
  
      cy.visit('/')

      cy.get('#user-name')
        .type(user)

      cy.get('#password')
        .type(password, { log:false })

      cy.get('#login-button')
       .click()
  
      cy.get('[data-test="error"]')
        .should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Failed: Username and password do not match', () => {
      const user = 'user'
      const password = '123'
  
      cy.visit('/')

      cy.get('#user-name')
        .type(user)

      cy.get('#password')
        .type(password, { log:false })

      cy.get('#login-button')
       .click()
  
      cy.get('[data-test="error"]')
        .should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Failed: Without username', () => {
      cy.visit('/')

      cy.get('#login-button')
        .click()
  
      cy.get('[data-test="error"]')
        .should('contain', 'Epic sadface: Username is required')
    })
  })