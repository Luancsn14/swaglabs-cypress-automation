describe('Logout', () => {
    beforeEach(() => {
      const user = Cypress.env('standard_user')
      const password = Cypress.env('user_password')
      cy.login(user, password)
    })
    it('Successfully', () => {
      cy.logout()
        
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/`)
    })
})