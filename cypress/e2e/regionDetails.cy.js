/// <reference types="Cypress" />

describe('verify region page', () =>{
   it('open base url', () =>{
       cy.login('testuserone@kubecloudsinc.com','Testing1');
   })
    it('verify region page', () =>{
        cy.contains('a','Region Details').click();
        cy.task('log','page of region details are opened');
    })
    it('Validating the fields of the page', () =>{
        cy.task('log','verify all region entries');
        cy.get('h1').should('be.visible').should('have.text','Regions');
        cy.get('th[class="number"]').should('have.text','Id');
        cy.get('th[class="number"]+th').should('have.text','Name');
        cy.contains('td[class="number"]','1');
        cy.contains('a','Europe');
        cy.get('td a').first();
        cy.get('td[class="number"]').nextAll();
        cy.get('td a').eq(1); 
        cy.get('td a').eq(2);
        cy.get('td a').last();
    //hi to check git commit msg
    })
})