import '../support/commands'

describe("Forum", () => {
    describe("Guidelines", () => {
        it("Navigate to Guidelines page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#guidelines").click();

            cy.url().should("include", `/forum/guidelines`);

            const title = "New rules will be implemented in the site in the near future";
            const content = "New rules to be added based on increase in users";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title);
        });
    });
});