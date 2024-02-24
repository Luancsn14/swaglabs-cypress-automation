Cypress.Commands.add('login', () => {
  const user = Cypress.env('standard_user')
  const password = Cypress.env('user_password')
  cy.visit('/')

  cy.get('#user-name')
    .type(user)

  cy.get('#password')
    .type(password, { log:false })

  cy.get('#login-button')
    .click()
 })

Cypress.Commands.add('logout', () => {     
  cy.get('#react-burger-menu-btn')
    .click()

  cy.get('#logout_sidebar_link')
    .click()
 })

Cypress.Commands.add('includeOneItemToCart', () => {     
  cy.get('#shopping_cart_container')
    .should('not.have.class', 'shopping_cart_badge')

  .get('.inventory_list .btn')
    .contains('Add to cart')
    .first()
    .click()
 })

 Cypress.Commands.add('includeAllItemsToCart', () => {     
  cy.get('#shopping_cart_container')
    .should('not.have.class', 'shopping_cart_badge')

  cy.get('.inventory_list .btn')
    .click({ multiple: true })
 })

 Cypress.Commands.add('removeItemsFromCart', () => {     
  cy.get('.inventory_list .btn')
    .should('contain', 'Remove')
    .click({ multiple: true })
 })


 