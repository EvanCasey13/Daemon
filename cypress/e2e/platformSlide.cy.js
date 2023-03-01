import '../support/commands'

describe("Platform slider", () => {

    describe("The home page", () => {
        it("Navigates to home page", () => {
            cy.visit("http://localhost:3000/");
        });
    });

    describe("Platform slider", () => {
        it("Check arrow buttons exist", () => {
            cy.visit("http://localhost:3000/");
            cy.get('button')
            .should('have.attr', 'class')
            .and('contain', 'slick-arrow slick-prev')
        });

        it("Select PC Platform", () => {
            cy.visit("http://localhost:3000/");
            cy.clickImage("pc");
            cy.url().should("include", `/platforms/4`);
        });
    });
});