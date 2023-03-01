import '../support/commands'

describe("Forum", () => {
    describe("Casual Discussion", () => {
        it("Navigate to Casual Discussion page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#casualDiscussion").click();

            cy.url().should("include", `/forum/casual-discussion`);
       
            const title = "Did anyone watch the new episode of the last of us show";
            const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
        });
    });
});