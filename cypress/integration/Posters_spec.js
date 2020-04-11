describe("My First Test", () => {
  it("Visits the page and finds button", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").contains("Search");
  });
  it("checks the home link", () => {
    cy.visit("http://localhost:3000/");
    cy.get("a").contains("Home");
  });
  it("Search button click", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Deepak");
    cy.get(".searchBoxContainer button").click({ multiple: true });
  });
  it("next & previous button click", () => {
    cy.visit("http://localhost:3000/");
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Deepak");
    cy.get(".searchBoxContainer button").click({ multiple: true });
    cy.get(".show button:last").click();
    cy.get(".show button:first").click();
  });

  it("Click on single poster", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Deepak");
    cy.get(".searchBoxContainer button").click({ multiple: true });
    cy.get(".posterContainer a:first").click();
  });
});
