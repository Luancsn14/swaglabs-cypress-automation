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

Cypress.Commands.add('includeItemToCart', () => {     
  cy.get('#shopping_cart_container')
    .should('not.have.class', 'shopping_cart_badge')

  cy.get('#add-to-cart-sauce-labs-backpack')
    .click()
 })
