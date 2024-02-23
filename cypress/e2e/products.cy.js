describe('Products', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Check product details', () => {
        cy.get('#item_4_title_link')
          .click()
        
        cy.url().should('contain', '/inventory-item.html?id=4')
    })
    
    it('Add item to cart', () => {
        cy.includeItemToCart()
        cy.get('.shopping_cart_badge')
          .should('contain', '1')        
    })

    it('Remove item from cart', () => {
        cy.includeItemToCart()
        cy.get('#remove-sauce-labs-backpack')
          .click()
       
        cy.get('#shopping_cart_container')
          .should('not.have.class', 'shopping_cart_badge')
    })
})