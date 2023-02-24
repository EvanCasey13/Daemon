Cypress.Commands.add('clickButton', (label) => {

    cy.on('uncaught:exception', (err, runnable) => {
  
      if (err.message.includes('Unexpected token')) {
  
        console.log('Application Error Javascript Token')
  
        return false;
  
      }
  
      if (err.name === 'TypeError') {
  
        console.log('Type Error')
  
        return false
      }
  
      return true
  
    })
  
    cy.get('button').contains(label).click()
  });

  Cypress.Commands.add('Register', (accountName, email, password) => {

    cy.on('uncaught:exception', (err, runnable) => {
  
      if (err.message.includes('Unexpected token')) {
  
        console.log('Application Error Javascript Token')
  
        return false;
  
      }
  
      if (err.name === 'TypeError') {
  
        console.log('Type Error')
  
        return false
      }
  
      return true
  
    })
  
    cy.get("#accountName").clear().type(accountName);
    cy.get("#email").clear().type(email);
    cy.get("#password").clear().type(password);
  
    cy.get("#registerButton").contains("Register").click();
  });

  Cypress.Commands.add('checkIfUserIsLoggedIn', (email) => {

    cy.on('uncaught:exception', (err, runnable) => {
  
      if (err.message.includes('Unexpected token')) {
  
        console.log('Application Error Javascript Token')
  
        return false;
  
      }
  
      if (err.name === 'TypeError') {
  
        console.log('Type Error')
  
        return false
      }
      return true
  
    })
  
    cy.get("#user_display_email").contains(email);
  });

  Cypress.Commands.add('Login', (email, password) => {

    cy.on('uncaught:exception', (err, runnable) => {
  
      if (err.message.includes('Unexpected token')) {
  
        console.log('Application Error Javascript Token')
  
        return false;
  
      }
  
      if (err.name === 'TypeError') {
  
        console.log('Type Error')
  
        return false
      }
  
      return true
  
    })
  
    cy.get("#email").clear().type(email);
    cy.get("#password").clear().type(password);
    cy.get("#loginButton").contains("Login").click();
  });

  Cypress.Commands.add('addToFavourites', (index) => {

    cy.on('uncaught:exception', (err, runnable) => {
  
      if (err.message.includes('Unexpected token')) {
  
        console.log('Application Error Javascript Token')
  
        return false;
  
      }
  
      if (err.name === 'TypeError') {
  
        console.log('Type Error')
  
        return false
      }
  
      return true
  
    })
  
    cy.get("#3498").contains("Add to list").click();
  });