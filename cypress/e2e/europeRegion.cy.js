/// <reference types ="Cypress" />

describe("verify all fields in Europe and its countries page", () => {
  it("visit the site and navigate to Europe page", () => {
    cy.login("testuserone@kubecloudsinc.com", "Testing1");
    cy.task("log", "nav to region details page");
    cy.contains("a", "Region Details").click();
    cy.task("log", "nav to Europe Region page");
    cy.get("td.number+td>a").first().click();
  });
  it("verify fields of Europe", () => {
    cy.task("log", "verify all fileds of Europe region");
    cy.get("h1")
      .should("be.visible")
      .should("have.text", "Countries in Europe");
    cy.get("th.number").contains("Id");
    cy.get("th.number+th").should("have.text", "Name");
    cy.get("td.number").first();
    cy.get("td a").first();

    cy.get("td.number").nextAll();
    cy.get("td a");
  });
});
