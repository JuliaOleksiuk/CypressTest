describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("fails due to assertion error", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("have.text", "Non-existing Text"); 
  });

  it("fails due to unexpected error", () => {
    cy.visit("https://example.cypress.io");
    cy.get("non-existent-element").click(); 
  });

  it.skip("is skipped", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("exist");
  });
})