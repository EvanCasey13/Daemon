import '../support/commands'

describe("Forum", () => {
    describe("Updates and Announcements", () => {
        it("Navigate to Updates and Announcement page and add a post", () => {
            cy.visit("http://localhost:3000/");
            cy.get("a").contains("Forum").click();

            cy.url().should("include", `/forumhomepage`);

            cy.get("#updatesAnnouncements").click();

            cy.url().should("include", `/forum/announcements`);
       
            const title = "New features added to application";
            const content = "In two weeks we will be adding features based on community feedback";

            cy.addForumPost(title, content);

            cy.get("h3").contains(title); 
            cy.clickButton("Delete Post");
        });
    });
});