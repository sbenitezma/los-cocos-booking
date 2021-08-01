describe("Display Los Cocos Bungalows Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render Navbar", () => {
    cy.get("[data-cy=navbar]")
      .should("be.visible")
      .should("not.be.empty")
      .find("div[class='v-toolbar__content']")
      .should("be.visible");
  });

  it("Should render Footer section", () => {
    cy.get("[data-cy=footer]").should("be.visible");
  });
});
