Cypress.Commands.add('login', (user, password) => { 
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
