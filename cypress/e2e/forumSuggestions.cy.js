import '../support/commands'

describe("Forum", () => {
    describe("Suggestions", () => {
        it("Navigate to Suggestions page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#suggestions").click();

            cy.url().should("include", `/forum/suggestions`);
       
            const title = "Add new features on community feedback";
            const content = "Add features based on community feedback and make changes to existing features";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
            cy.clickButton("Delete Post");
        });
    });
});