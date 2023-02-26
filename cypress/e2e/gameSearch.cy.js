import '../support/commands'

describe("Search for a game", () => {

      describe("The games page", () => {
        it("Search for The Witcher 3 Wild Hunt.", () => { 
          cy.visit("http://localhost:3000/gamehomepage");
          cy.search("The Witcher 3 Wild Hunt");
        });
      });  
});