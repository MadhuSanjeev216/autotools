describe("verify the employee details page", () => {
  it("opens the login page", () => {
    cy.login("testuserone@kubecloudsinc.com", "Testing1");
    cy.pageValidator();
  });
  it("navigate to employee details page", () => {
    cy.get("li a").eq(3).click();
    cy.pageValidator();
    //    cy.request("/").its('body')
    //    .then(html=>{
    //         const $employee1 = Cypress.$(html).css('th','number').text();
  });
  it("Verify first name in both summary page and employee page", () => {
    for (let i = 0; i <= 106; i++) {
      let name;
      cy.get("td.number+td")
        .eq(i)
        .then(($n) => {
          name = $n.text() + " ";
        });
      cy.get("td.number+td+td")
        .eq(i)
        .then(($n) => {
          name += $n.text();
        });
      cy.get("td.number a").eq(i).click();
      cy.get("h1").then(($verifyName) => {
        expect(name).to.contain($verifyName.text());
      });
      cy.go("back");
    }
  }); 
  it("verify Email details of Employee from summary page to detail page", () => {
    for (let idCount = 0; idCount <= 106; idCount++) {
      let email
      cy.get("td.number+td+td+td")
        .eq(idCount)
        .then(($email) => {
          email = $email.text();
        });
      cy.get("td.number a").eq(idCount).click();
      cy.get("tr td+td+td+td")
        .eq(0)
        .then(($verifyEmail) => {
          expect(email).to.contain($verifyEmail.text());
        });
      cy.go("back");
    }
  });
});
