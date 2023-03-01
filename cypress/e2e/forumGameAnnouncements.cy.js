import '../support/commands'

describe("Forum", () => {
    describe("Game Announcements", () => {
        it("Navigate to Game Announcements page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#gameAnnouncements").click();

            cy.url().should("include", `/forum/gameannouncements`);
       
            const title = "The last of us remake coming to pc";
            const content = "The Last Of Us is being ported to pc and will be available on steam on the 29th of March 2023.";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
            cy.clickButton("Delete Post");
        });
    });
});