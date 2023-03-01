import '../support/commands'

describe("Genre slider", () => {

    describe("The home page", () => {
        it("Navigates to home page", () => {
            cy.visit("http://localhost:3000/");
        });
    });

    describe("Genre slider", () => {
        it("Check arrow buttons exist", () => {
            cy.visit("http://localhost:3000/");
            cy.get('button')
            .should('have.attr', 'class')
            .and('contain', 'slick-arrow slick-prev')
        });

        it("Select RPG Genre", () => {
            cy.visit("http://localhost:3000/");
            cy.clickImage("role-playing-games-rpg");
            cy.url().should("include", `/genres/role-playing-games-rpg`);
        });
    });
});