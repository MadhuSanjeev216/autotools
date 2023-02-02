describe("verify the employee details page", ()=>{
    it("opens the login page", ()=>{

        cy.login('testuserone@kubecloudsinc.com','Testing1');
        //cy.contains('a','Employee Details')
    })

    it("navigate to employee details page", ()=>{
        cy.get('li a').eq(3).click();
       cy.get('h1').should('be.visible').should('have.text','Employees');
       cy.request("/").its('body')
       .then(html=>{
            const $employee1 = Cypress.$(html).find('td.number').eq(0).text();
            cy.log('1st Employee: '+$employee1);
       })
    })

})