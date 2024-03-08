

describe('Your Cart', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Check empty cart', () => {
        cy.get('.shopping_cart_link')
          .click()

        cy.get('.cart_list')
          .should('not.have.class', 'cart_item')
    })

    it('Buy items', () => {
      cy.includeAllItemsToCart()
      cy.get('.shopping_cart_link')
        .click()

      cy.get('.cart_item')
        .should('have.length.greaterThan', 0)

      cy.checkout()

      cy.validatePrices()

      cy.get('#finish')
        .click()

      cy.url()
        .should('be.equal', `${Cypress.config('baseUrl')}/checkout-complete.html`)

      cy.get('.title')
        .should('have.text', 'Checkout: Complete!')
    })
})