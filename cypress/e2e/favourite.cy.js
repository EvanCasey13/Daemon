import '../support/commands'

describe("Favourite use case", () => {
    
      before(() => {
        cy.visit("http://localhost:3000/gamehomepage");
      })

      describe("The games page", () => {
        it("Add game to favourites.", () => { 
            cy.visit("http://localhost:3000/gamehomepage");
          cy.addToFavourites(3498);
        });
      });  
});