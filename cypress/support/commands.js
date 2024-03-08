import { faker } from '@faker-js/faker'

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

  cy.get('.inventory_list .btn')
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

Cypress.Commands.add('validateAscendingOrder', (orderedBy) => {
  cy.get(`${orderedBy}`).then((elements) => {
    const sortedItems = Cypress._.map(elements, "innerText").sort(function(a, b){return a-b});
  
    for (let i = 0; i < elements.length; i++) {
      cy.wrap(elements[i])
        .should('have.text', sortedItems[i]);
    }
  });
})

Cypress.Commands.add('validateDescendingOrder', (orderedBy) => {
  cy.get(`${orderedBy}`).then((elements) => {
    const sortedItems = Cypress._.map(elements, "innerText").sort(function(a, b){return b-a});

    for (let i = 0; i < elements.length; i++) {
      cy.wrap(elements[i])
        .should('have.text', sortedItems[i]);
    }
  });
})

Cypress.Commands.add('checkout', () => {
  cy.get('#checkout')
    .click()
      
  cy.get('[data-test="firstName"]')
    .type(faker.person.firstName())
  cy.get('[data-test="lastName"]')
    .type(faker.person.lastName())
  cy.get('[data-test="postalCode"]')
    .type(faker.location.zipCode())
    
  cy.get('#continue')
    .click()
})

Cypress.Commands.add('validatePrices', () => {
  cy.get('.inventory_item_price').then((elements) => {
    const prices = Cypress._.map(elements, "innerText");
    var price = 0;

    for (let i = 0; i < elements.length; i++) {
      price += parseFloat(prices[i].replace('$', ''));          
    }

    const tax = (price * 0.08).toFixed(2);

    const total = price + parseFloat(tax);

    cy.get('.summary_subtotal_label')
      .should('have.text', `Item total: $${price}`)

    cy.get('.summary_tax_label')
      .should('have.text', `Tax: $${tax}`)

    cy.get('.summary_total_label')
      .should('have.text', `Total: $${total}`)
  });
})


 