// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',  (username, password, totp) =>{
      cy.visit('https://mytest.sg.com.ua:9999/login')
      cy.get('[type=submit]').should('be.disabled')
      cy.get('#input-12').clear().type(username)
      cy.get('#input-16').clear().type(password)
      cy.get('[type=submit]').should('be.enabled').click()

      const {getTotp}  = require('minimal-cognito-totp');
      const token = getTotp(totp);
      cy.get('[type=submit]').should('be.disabled')
      cy.get('#input-30').clear().type(token)
      cy.get('[type=submit]').should('be.enabled').click()
      cy.url().should('eq', 'https://mytest.sg.com.ua:9999/')
})