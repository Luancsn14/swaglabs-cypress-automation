describe('Products', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Check product details', () => {
        cy.get('#item_4_title_link')
          .click()
        
        cy.url().should('contain', '/inventory-item.html?id=4')
    })
    
    it('Add one item to cart', () => {
        cy.includeOneItemToCart()
        cy.get('.shopping_cart_badge')
          .should('contain', '1')        
    })

    it('Remove items from cart', () => {
        cy.includeAllItemsToCart()
        cy.removeItemsFromCart()        
       
        cy.get('#shopping_cart_container')
          .should('not.have.class', 'shopping_cart_badge')
        
        cy.get('.inventory_list .btn')
          .should('not.contain', 'Remove')
          .and('contain', 'Add to cart')
    })

    it('Add all items to cart', () => {
      cy.includeAllItemsToCart()
     
      cy.get('.shopping_cart_badge')
        .should('contain', '6') 
  })
})