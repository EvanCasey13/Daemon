import '../support/commands'

describe("Forum", () => {
    describe("Game Recommendations", () => {
        it("Navigate to Game Recommendations page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#recommendations").click();

            cy.url().should("include", `/forum/recommendations`);
       
            const title = "Sons the forest must play early access game";
            const content = "The new forest game has released and is must play for the amount of content for being a early access game.";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
        });
    });
});