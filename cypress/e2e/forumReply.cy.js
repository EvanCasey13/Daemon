import '../support/commands'

describe("Forum Reply", () => {
    describe("Guidelines", () => {
        it("Navigate to Guidelines page and add a reply", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#guidelines").click();

            cy.url().should("include", `/forum/guidelines`);

            const title = "This is a great change";
            const content = "The current rules are being abused by users of the platform, this is a well needed and required change.";

            cy.get("p").contains("Replies").click();

            cy.addPostReply(title, content);
            cy.clickButton("Delete Post");
        });
    });
});