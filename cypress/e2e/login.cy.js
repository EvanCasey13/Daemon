import '../support/commands'

describe("Login use case", () => {

    describe("Navigate to the login page", () => {
        it("Navigates to login page", () => {
            cy.visit("http://localhost:3000/login");
        });
    });

    describe("login to account", () => {
        it("Enter account details & login, then logout", () => {
            cy.visit("http://localhost:3000/login");
            cy.url().should("include", `/login`);

            const email = "evancasey1234@gmail.com";
            const password = "123456789";

            cy.Login(email, password);

            cy.Logout();
        });
    });
});