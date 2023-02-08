/// <reference types="Cypress" />

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
Cypress.Commands.add('login', (email, password) => { 
        cy.visit('/autotools').then( () => {
            cy.task('log', 'Opened the url');
            cy.contains('h1','Login to Auto Tools').should('be.visible');
            cy.task('log', 'validated the header');
        });
        cy.task('log','Entering credentials');
        cy.get('input[name="j_username"]').type(email);
        cy.get('input[name="j_password"]').type(password);
        cy.contains('button', 'Sign in').click();
        cy.contains('h1','Auto Tools').should('be.visible');
        cy.task('log','Logged into the application and home page displayed');
})
//
//
Cypress.Commands.add('pageValidator',()=>{
        cy.task('log','Validating the page header');
        cy.get('h1').should('be.visible');
})
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

// -- This will be the command for opening home page url
