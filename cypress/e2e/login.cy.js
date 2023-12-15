describe('Login', () => {
    it('successfully', () => {
      const user = Cypress.env('standard_user')
      const password = Cypress.env('user_password')
  
      cy.login(user, password)
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    })
  })