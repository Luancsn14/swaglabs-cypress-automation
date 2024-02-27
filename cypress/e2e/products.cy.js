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

    it('Sort items by Name (A to Z)', () => {
      cy.get('select.product_sort_container')
        .select('az')

      cy.get('.active_option')
        .should('have.text', 'Name (A to Z)')

      cy.validateAscendingOrder('.inventory_item_name')
    })

    it('Sort items by Name (Z to A)', () => {
      cy.get('select.product_sort_container')
        .select('za')
      
      cy.get('.active_option')
        .should('have.text', 'Name (Z to A)')

      cy.validateDescendingOrder('.inventory_item_name')
    })

    it('Sort items by Price (low to high)', () => {
      cy.get('select.product_sort_container')
        .select('lohi')
      
      cy.get('.active_option')
        .should('have.text', 'Price (low to high)')

      cy.validateAscendingOrder('.inventory_item_price')
    })

    it('Sort items by Price (high to low)', () => {
      cy.get('select.product_sort_container')
        .select('hilo')
      
      cy.get('.active_option')
        .should('have.text', 'Price (high to low)')

      cy.validateDescendingOrder('.inventory_item_price')
    })
})