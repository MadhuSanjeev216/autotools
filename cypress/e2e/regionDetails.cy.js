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
    })
})