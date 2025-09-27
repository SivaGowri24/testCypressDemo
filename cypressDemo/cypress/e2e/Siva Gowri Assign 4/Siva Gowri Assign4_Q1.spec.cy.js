describe('Login Form Testing', () => {
  const Url = 'https://practice.expandtesting.com/login'; 

  beforeEach(() => {
    cy.visit(Url); // Step 1: Navigate to login page
  });

  it('Login successfully with valid credentials', () => {
    // Step 2&3: Enter valid credentials
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click(); // Step 4: Click login
    cy.url().should('include', '/secure'); // Step 5: Assertions
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.get('a[href="/logout"]').should('be.visible');
  });

  // Verify the error message for invalid username

  it('should show error for invalid username', () => {
    cy.get('#username').type('Invalid user');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
      cy.get('.alert-danger').should('be.visible').and('contain.text', 'Your username is invalid!');
  });

  // Verify the error message for invalid password

  it('should show error for invalid password', () => {
    cy.get('#username').type('practice');
    cy.get('#password').type('InvalidPassword1#');
    cy.get('button[type="submit"]').click();
    cy.get('.alert-danger').should('be.visible').and('contain.text', 'Your password is invalid!');
  });
});
