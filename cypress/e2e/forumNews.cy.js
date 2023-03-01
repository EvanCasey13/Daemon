import '../support/commands'

describe("Forum", () => {
    describe("News", () => {
        it("Navigate to News page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#news").click();

            cy.url().should("include", `/forum/news`);
       
            const title = "Resident evil 4 remake";
            const content = "Capcom are remaking resident evil 4, which will be released soon.";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
        });
    });
});