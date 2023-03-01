import '../support/commands'

describe("Forum", () => {
    describe("CGT Support", () => {
        it("Navigate to CGT support page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#CGTSupport").click();

            cy.url().should("include", `/forum/games-tech-computer-support`);
       
            const title = "Fallout 3 crashing on launch";
            const content = "Fallout 3 on steam is crashing when I try and launch it, i've reinstalled and verified the integrity of game cache but I am all out of ideas.";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
        });
    });
});