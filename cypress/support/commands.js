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

  Cypress.Commands.add('clickImage', (slug) => {

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
  
    cy.get('#' + slug).click()
  });

  Cypress.Commands.add('clickLink', (id) => {

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
  
    cy.get('a').contains(id).click()
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

  Cypress.Commands.add('addToFavourites', (slug) => {

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
  
    cy.get('#' + slug).contains("Add to list").click();

    cy.get('#statusDropdown').click();

    cy.contains('Plan to play').click();

    cy.get('#ratingDropdown').click();

    cy.contains('Submit').click();
  });

  Cypress.Commands.add('addForumPost', (title, content) => {

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
  
    cy.get('button').contains("Add Post").click();
    cy.get("#postTitle").clear().type(title);
    cy.get("#postContent").clear().type(content);
    cy.get('button').contains("Submit").click();

    cy.get(`[aria-label="Close"]`).click()
  });

  Cypress.Commands.add('addPostReply', (title, content) => {

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
  
    cy.get('button').contains("Add Reply").click();
    cy.get("#replyTitle").clear().type(title);
    cy.get("#replyContent").clear().type(content);
    cy.get('button').contains("Submit").click();

    cy.get(`[aria-label="Close"]`).click()
  });

  Cypress.Commands.add('getDetails', (id) => {

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
  
    cy.get('#' + id).click();
    cy.url().should("include", `/games/${id}`);
  });

  Cypress.Commands.add('search', (query) => {

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
  
    cy.get("#filled-search").clear().type(query);
    cy.url().should("include", `/gamehomepage?query=The+Witcher+3+Wild+Hunt`);
  });

  Cypress.Commands.add('Logout', (query) => {

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
  
    cy.get('[class*="nextui-avatar-bg"]').click();

    cy.get('a').contains("Logout").click({force: true});
  });