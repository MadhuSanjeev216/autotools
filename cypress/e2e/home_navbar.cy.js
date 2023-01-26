/// <reference types="Cypress" />

describe('Navigation through navbar in header', () => {

    it('verify nav bar',()=>{
        cy.login('testuserone@kubecloudsinc.com','Testing1');
        cy.get('a[class="brand"]').click();
        cy.get('a[class="dropdown-toggle"]').click();
        cy.contains('a','Employee Details');
        cy.contains('a','Region Details');

    })
    
})