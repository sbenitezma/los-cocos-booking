describe("Display Los Cocos Bungalows Room page", () => {
  beforeEach(() => {
    cy.visit("/rooms");
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
