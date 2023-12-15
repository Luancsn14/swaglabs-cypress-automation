Cypress.Commands.add('login', (user, password) => { 
    cy.visit('/')
    
    cy.get('#user-name')
      .type(user)

    cy.get('#password')
      .type(password)

    cy.get('#login-button')
      .click()
 })
