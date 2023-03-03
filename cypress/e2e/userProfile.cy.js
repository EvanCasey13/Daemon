import '../support/commands'

describe("User Profile", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");

        cy.get('[class*="nextui-avatar-bg"]').click();

        cy.get('a').contains("My Profile").click();

        cy.url().should("include", `/profile`);
      });
    describe("Profile lists", () => {
        it("Click Playing list", () => {

            cy.get('a').contains("Playing").click();

            cy.url().should("include", `/playing`);
        });

        it("Click Completed list", () => {

            cy.get('a').contains("Completed").click();

            cy.url().should("include", `/completed`);
        });

        it("Click On Hold list", () => {

            cy.get('a').contains("On-Hold").click();

            cy.url().should("include", `/on-hold`);
        });

        it("Click Dropped list", () => {

            cy.get('a').contains("Dropped").click();

            cy.url().should("include", `/dropped`);
        });

        it("Click Planning to play list", () => {

            cy.get('a').contains("Planning to play").click();

            cy.url().should("include", `/planning`);
        });
    });
});