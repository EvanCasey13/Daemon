import '../support/commands'

describe("Registration use case", () => {
describe("Daemon Registration", () => {
  it('Enters register page', () => {
    cy.visit('http://localhost:3000/register')
  })
})

describe("Register account", () => {
  it("Enter account details & Register", () => {   
    cy.visit('http://localhost:3000/register')
      const accountName = "Evan1234";
      const email = "evancasey1234@gmail.com";
      const password = "123456789";
      
      cy.Register(accountName, email, password);
  });
  });
});