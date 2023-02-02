//// <reference path=""/>
describe("verify the employee details page", ()=>{
    it("opens the login page", ()=>{

        cy.login('testuserone@kubecloudsinc.com','Testing1');
        //cy.contains('a','Employee Details')
    })

    it("navigate to employee details page", ()=>{
        cy.get('li a').eq(3).click();
       
    })

})