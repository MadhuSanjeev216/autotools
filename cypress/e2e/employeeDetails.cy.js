describe("verify the employee details page", ()=>{
    it("opens the login page", ()=>{

        cy.login('testuserone@kubecloudsinc.com','Testing1');
        cy.pageValidator();
        //cy.contains('a','Employee Details')

    })

    it("navigate to employee details page", ()=>{
        cy.get('li a').eq(3).click();
        cy.pageValidator();
    //    cy.request("/").its('body')
    //    .then(html=>{
    //         const $employee1 = Cypress.$(html).css('th','number').text();
    //    })
    })
    it("Verify first name in both summary page and employee page",()=>{
            for(let i=0;i<=106;i++){
            let name    
                cy.get('td.number+td').eq(i).then(($n)=>{
                        name = $n.text()+" ";
                    })
                cy.get('td.number+td+td').eq(i).then(($n)=>{
                        name += $n.text();
                   })   
                cy.get('td.number a').eq(i).click();
                cy.get('h1').then(($verifyName)=>{
                        expect(name).to.contain($verifyName.text());
                            // if(name==$verifyName.text()) {
                            //     cy.task('log','Valid');
                            // }
                            // else {
                            //     cy.task('log','Not Valid');
                            //     console.error('Not a Valid Name')
                            // }
                    })                                                                           
                 cy.go('back');
            }
    })
})