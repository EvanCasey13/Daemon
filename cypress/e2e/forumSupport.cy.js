import '../support/commands'

describe("Forum", () => {
    describe("Support", () => {
        it("Navigate to Support page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#support").click();

            cy.url().should("include", `/forum/support`);
       
            const title = "Issues adding game to personal list";
            const content = "Can't add game to playing list, anyone else having this issue?";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
            cy.clickButton("Delete Post");
        });
    });
});