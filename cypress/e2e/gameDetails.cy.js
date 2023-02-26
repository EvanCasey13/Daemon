import '../support/commands'

describe("Get details of grand theft auto", () => {
      before(() => {
        cy.visit("http://localhost:3000/gamehomepage");
      })

      describe("The games page", () => {
        it("Gets details of game.", () => { 
          cy.getDetails(3498);
        });
      });  
});