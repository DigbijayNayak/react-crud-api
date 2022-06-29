describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Biswa Nayak");
    cy.get("#email").type("biswa547@gmail.com");
    cy.get("#btn").click();
  });
});
